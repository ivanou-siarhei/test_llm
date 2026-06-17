# Plant Growth SVG Animation

## Project Overview
- **Type**: Single-file HTML/CSS/JS SVG animation
- **Core functionality**: Organic plant growth simulation with stem extension, leaf sprouting/unfurling, and seamless looping
- **Target users**: Web visitors seeking ambient nature animation

## Visual & Rendering Specification

### Scene Setup
- **ViewBox**: 400x600 SVG canvas, responsive
- **Background**: Deep soil gradient (dark brown #2d1b0e to #1a0f08)
- **Style**: Hand-drawn organic feel with slight imperfections

### Color Palette
- **Stem**: Gradient from #3d6b3d (base) to #5a9a5a (tip)
- **Leaves**: Multiple greens (#4a7c4a, #5a9a5a, #6ab86a) for depth
- **Soil**: #2d1b0e, #1a0f08
- **Accent**: Subtle warm highlight on new growth

### Animation Phases (per loop cycle ~8 seconds)
1. **Stem Growth** (0-3s): Stem extends from soil upward with slight wobble
2. **Leaf Sprouting** (2-5s): Leaves emerge at nodes, unfurl with spring physics
3. **Full Bloom** (5-6s): Plant at full size, gentle swaying
4. **Fade/Reset** (6-8s): Plant fades, cycle restarts seamlessly

## Animation Specification

### Stem
- Bezier curve path, grows from bottom to top
- Slight sinusoidal wobble during growth
- Thickness tapers toward tip
- Uses `stroke-dashoffset` animation for growth effect

### Leaves
- Elliptical shapes with pointed tips
- Spawn at stem nodes (every ~60px of growth)
- Unfurl animation: scale from 0 + rotation
- Spring physics: overshoot then settle using cubic-bezier(0.68, -0.55, 0.265, 1.55)
- Wind effect: continuous gentle rotation oscillation

### Physics Parameters
- **Spring stiffness**: 0.3 (unfurl overshoot)
- **Wind frequency**: 0.5Hz
- **Wind amplitude**: ±5° rotation
- **Damping**: 0.95 (for settling)

## Interaction Specification
- None required (ambient animation)
- Hover could subtly affect wind intensity (optional enhancement)

## Technical Implementation
- Pure SVG with CSS animations and JS for sequencing
- CSS custom properties for timing control
- `requestAnimationFrame` for smooth JS-driven spring physics
- Single `<svg>` element with grouped elements for stem/leaves

## Acceptance Criteria
1. ✓ Stem grows smoothly from soil with organic wobble
2. ✓ Leaves sprout at intervals with springy unfurl animation
3. ✓ Wind effect visible on leaves throughout
4. ✓ Animation loops seamlessly without visible reset
5. ✓ No external libraries - pure HTML/CSS/JS
6. ✓ Runs smoothly at 60fps