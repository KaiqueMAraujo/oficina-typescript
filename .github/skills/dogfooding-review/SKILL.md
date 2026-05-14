---
name: dogfooding-review
description: "Play and evaluate an app as a critical user, identifying fun factors and UX gaps. Use when: testing new features, assessing game/interactive apps, conducting playtest feedback, evaluating user engagement, identifying friction points before launch."
argument-hint: "What app or feature should we evaluate?"
---

# Critical Dogfooding Review

A structured approach to testing applications as an **experienced user** with a critical eye toward fun, engagement, and user experience. Identifies both strengths and brutal friction points that kill engagement.

## When to Use

- ✅ Testing interactive/game features before launch
- ✅ Evaluating user engagement and fun factor
- ✅ Conducting playtest or user testing sessions
- ✅ Finding UX friction that kills adoption
- ✅ Assessing game mechanics and progression
- ✅ Reviewing social/collaborative features
- ✅ Identifying replayability and retention issues

## Key Principles

1. **Play like a real user** - Don't be polite. If it's boring, say it's boring.
2. **Evaluate systematically** - Check visual feedback, audio cues, progression, social elements, content quality
3. **Categorize with severity** - Use priority matrix: Critical/High/Medium/Low + Impact/Effort
4. **Provide actionable feedback** - "This is bad" vs "This feature kills engagement because X; try Y"
5. **Balance** - Acknowledge strengths alongside weaknesses

## Evaluation Framework

### Core Areas to Assess

| Area | What to Evaluate | Red Flags |
|------|------------------|-----------|
| **Visual Engagement** | Animations, colors, visual feedback, aesthetics | Drab colors, no animation feedback, boring UI |
| **Audio & Feedback** | Sound design, celebration moments, satisfying clicks | Silent app, no winning sound, empty victories |
| **Content Quality** | Text, prompts, questions, personality | Generic, corporate tone, no humor |
| **Progression & Tension** | Visible progress, pacing, difficulty curve | No sense of progress, no stakes, instant wins |
| **Celebration & Reward** | Victory moments, achievement, sense of accomplishment | Anticlimactic wins, no payoff |
| **Competition/Social** | Multiplayer, leaderboards, sharing, comparison | Single-player only, no social element |
| **Replayability** | Reasons to play again, variety, challenges | Same every time, no progression, nothing new |
| **Context of Use** | Does it fit the real-world scenario? | Feature ignores actual use case |

### Severity Classification

**High-to-Low Priority Matrix:**

```
           HIGH IMPACT                 MEDIUM IMPACT          LOW IMPACT
HIGH EFFORT: Important (do later)     Nice-to-have (skip)   Skip entirely
LOW EFFORT:  🔴 CRITICAL (do first)   🟠 HIGH (do soon)     🟡 MEDIUM (consider)
```

**Labels:**
- 🔴 **CRITICAL** - Kills engagement or breaks core experience
- 🟠 **HIGH** - Significantly reduces fun/adoption
- 🟡 **MEDIUM** - Noticeable but not dealbreaker
- 🟢 **LOW** - Polish/nice-to-have

## Procedure

### 1. Setup & First Impressions (5 min)

```
□ Start the app fresh
□ Note FIRST gut reaction (visually, emotionally)
□ Review any intro/tutorial
□ Check: Does it communicate "this will be fun"?
```

### 2. Play Through Core Experience (10-15 min)

```
□ Complete primary objective/win condition
□ Note smooth vs. friction points in real-time
□ Try edge cases or secondary features
□ Assess: Am I enjoying this?
```

### 3. Evaluate Each Dimension (Structured Analysis)

For **each area** above:
- ✅ What works well?
- ❌ What's missing or broken?
- 🎯 What's the impact on fun/engagement?
- 💡 What's a concrete fix?

### 4. Categorize Issues with Priority Matrix

For each finding:
```
Priority: 🔴 CRITICAL | 🟠 HIGH | 🟡 MEDIUM | 🟢 LOW
Impact:   Kills adoption / Reduces engagement / Nice-to-have
Effort:   Easy (~1hr) / Medium (~1 day) / Hard (3+ days)
```

### 5. Provide Actionable Recommendations

Instead of: *"The app is boring"*

Try: *"The victory celebration lacks impact (visual: emoji only, audio: none). Fix: Add confetti animation + sound effect + stat display ('Won in 2m30s'). Effort: 2 hours. Impact: HIGH - celebration is the payoff moment."*

### 6. Summarize with Brutally Honest Score

**Format:**
- Current fun factor: **X/10** (specific reason)
- Potential with fixes: **Y/10**
- Most impactful single change: [What would move the needle most?]

## Example Template

```
# Dogfooding Review: [App Name]

## First Impressions
- Visual: [Reaction]
- Emotional: [Reaction]
- Does it say "this is fun"? [YES/NO - why?]

## Visual Engagement
✅ Works: [What looks good]
❌ Broken: [What's drab/static]
🎯 Impact: CRITICAL
💡 Fix: [Specific change]

[Repeat for each dimension...]

## Severity Breakdown
| Priority | Count | Examples |
|----------|-------|----------|
| 🔴 CRITICAL | 3 | [list] |
| 🟠 HIGH | 5 | [list] |
| 🟡 MEDIUM | 4 | [list] |
| 🟢 LOW | 2 | [list] |

## Final Score
- **Current**: 6/10 (feels like a prototype, not a game)
- **Potential**: 9/10 (with celebration, sound, better questions)
- **Move the needle**: Add celebration animations + victory sound

## Top 3 Priorities
1. 🔴 [Critical fix]
2. 🔴 [Critical fix]
3. 🟠 [High priority]
```

## Tips for Effective Dogfooding

- **Pretend you're a stranger** - You built this, but evaluate like someone who hasn't
- **Play until bored** - Don't stop at first win; see if you'd play again
- **Check mobile first** - Is it responsive? Touch-friendly?
- **Simulate multiplayer** - Even alone, imagine: would friends enjoy this together?
- **Ask "why?"** - Not just "this is bad" but "this is bad BECAUSE..."
- **Benchmark**: Compare to similar successful apps for reference
- **Be specific**: "Add button here" beats "needs better UI"

## Common Pitfalls to Avoid

- ❌ Being too nice or polite (this kills honesty)
- ❌ Conflating bugs with UX issues
- ❌ Vague feedback ("it's not fun enough")
- ❌ Ignoring the context (who is this FOR?)
- ❌ Recommending changes without understanding trade-offs

## Success Criteria

A good dogfooding review:
- ✅ Is brutally honest without being cruel
- ✅ Identifies 2-3 game-changing recommendations
- ✅ Categorizes issues with clear priorities
- ✅ Provides actionable next steps
- ✅ Acknowledges what works well
- ✅ Respects constraints (effort/scope)

---

**Next Steps**: Use feedback to create focused issues/PRs for top 3 priorities.
