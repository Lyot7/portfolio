import { test, expect } from '@playwright/test';

test('Analyze React Bits Scroll Stack Component', async ({ page }) => {
  // Naviguer vers la page du composant scroll stack
  await page.goto('https://reactbits.dev/components/scroll-stack');
  
  // Attendre que la page soit chargée
  await page.waitForLoadState('networkidle');
  
  // Prendre une capture d'écran de la page entière
  await page.screenshot({ path: 'reactbits-scroll-stack-full.png', fullPage: true });
  
  // Analyser la structure du composant
  const scrollStackContainer = page.locator('[data-component="scroll-stack"]').first();
  
  if (await scrollStackContainer.count() > 0) {
    console.log('Scroll stack container found');
    
    // Analyser les éléments enfants
    const children = await scrollStackContainer.locator('> *').count();
    console.log(`Number of children: ${children}`);
    
    // Analyser le CSS appliqué
    const styles = await scrollStackContainer.evaluate((el) => {
      const computedStyle = window.getComputedStyle(el);
      return {
        position: computedStyle.position,
        height: computedStyle.height,
        overflow: computedStyle.overflow,
        display: computedStyle.display
      };
    });
    
    console.log('Container styles:', styles);
    
    // Analyser les éléments individuels
    for (let i = 0; i < children; i++) {
      const child = scrollStackContainer.locator('> *').nth(i);
      const childStyles = await child.evaluate((el) => {
        const computedStyle = window.getComputedStyle(el);
        return {
          position: computedStyle.position,
          top: computedStyle.top,
          height: computedStyle.height,
          transform: computedStyle.transform,
          zIndex: computedStyle.zIndex
        };
      });
      
      console.log(`Child ${i} styles:`, childStyles);
    }
  }
  
  // Analyser les animations et transitions
  const animations = await page.evaluate(() => {
    const styleSheets = Array.from(document.styleSheets);
    const animations = [];
    
    styleSheets.forEach(sheet => {
      try {
        const rules = Array.from(sheet.cssRules || []);
        rules.forEach(rule => {
          if (rule instanceof CSSKeyframeRule || rule instanceof CSSAnimationRule) {
            animations.push({
              type: rule instanceof CSSKeyframeRule ? 'keyframe' : 'animation',
              name: rule.name,
              cssText: rule.cssText
            });
          }
        });
      } catch (e) {
        // Ignorer les erreurs CORS
      }
    });
    
    return animations;
  });
  
  console.log('Animations found:', animations);
  
  // Analyser les interactions au scroll
  await page.evaluate(() => {
    let scrollEvents = 0;
    let transformValues = [];
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const transform = window.getComputedStyle(element).transform;
          transformValues.push(transform);
          scrollEvents++;
        }
      });
    });
    
    // Observer tous les éléments du scroll stack
    document.querySelectorAll('[data-component="scroll-stack"] > *').forEach(el => {
      observer.observe(el);
    });
    
    // Simuler le scroll
    window.scrollTo(0, window.innerHeight);
    
    setTimeout(() => {
      console.log('Scroll events:', scrollEvents);
      console.log('Transform values:', transformValues);
    }, 1000);
  });
  
  // Attendre un peu pour voir les résultats
  await page.waitForTimeout(2000);
});
