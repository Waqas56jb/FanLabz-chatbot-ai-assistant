if (process.env.VERCEL !== '1') {
    require('dotenv').config();
}
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const isVercel = process.env.VERCEL === '1';

const app = express();
app.use(cors());
app.use(express.json());

// ============================================================
// FANLABZ COMPLETE KNOWLEDGE BASE — DEEP TRAINING DATA
// ============================================================
const FANLABZ_KNOWLEDGE = `
=== FANLABZ COMPLETE AI TRAINING KNOWLEDGE BASE ===

PLATFORM IDENTITY:
- Name: FanLabz (stylized as "fanLabz")
- Tagline: "Keep More. Earn Faster. Own Your Brand."
- Sub-tagline: "The platform where creators keep more and earn faster."
- Website: https://fanlabz.com
- Email: info@fanlabz.com
- Entity: Fanlabz LLC
- Legal jurisdiction: State of Delaware, USA
- Support email: support@fanlabz.com
- Copyright: © 2026 FanLabz. All Rights Reserved.
- Developed by: Niche Techy
- Available in: English, Español

WHAT FANLABZ IS:
FanLabz is a premium online membership and content monetization platform that lets independent creators publish and monetize their content, and lets supporters (Fans) pay to access that content through subscriptions, pay-per-view posts, tips, and other creator interactions. It is built by creators, for creators, with a focus on maximum earnings, instant payouts, and powerful marketing tools. FanLabz is NOT just another content platform — it's a business-grade creator economy infrastructure with industry-leading payout rates, safety protections, and agency-level management tools.

CREATOR PAYOUT STRUCTURE (CRITICAL FACTS):
- FanLabz payout rate: UP TO 88% — creators keep 88% of what fans pay
- FanLabz platform fee: 12% of gross Fan Payments
- Default Terms of Service fee: 20% (the 88%/12% split is the promotional/featured rate)
- Competitor comparison: OnlyFans = 80% payout (20% fee), Fansly = 80%, Fanvue = varies
- FanLabz BEATS Fanvue, Fansly, and OnlyFans on payout rate
- NO FEES on first $1,000 earned — creators keep 100% of their first $1,000
- Example calculation (1,000 subscribers @ $15/month + 25 PPV + $500 tips):
  → FanLabz take-home: $13,750/month (88% kept)
  → Other platforms take-home: $11,719/month (70-80% kept)
  → Difference: $2,031 MORE per month on FanLabz = $24,372 MORE per year

WAYS TO EARN ON FANLABZ (6 Revenue Streams):
1. SUBSCRIPTIONS (ACTIVE): Build predictable monthly income with custom subscription tiers. Creator sets the price — full control. Example: $25/mo, $30/mo, $75/mo are real creator prices on platform.
2. PAY-PER-VIEW / PPV (ACTIVE): Sell exclusive photos and videos instantly. Fans pay per piece of content without needing full subscription. Fans unlock individual posts (example: $8.00 to unlock a post).
3. PAID MESSAGES / DMs (ACTIVE): Send personal or mass messages that fans can unlock. Smart Mass DMs let creators reach ALL subscribers at once with monetized content.
4. TIPS (ACTIVE): Fans can support you directly any time, on any post. Zero friction, instant income boost.
5. LIVE SESSIONS (COMING SOON): Host ticketed live events with real-time tips from audience.
6. DIGITAL STOREFRONT (COMING SOON): Sell downloadable or physical merchandise directly from your profile.

3-STEP GETTING STARTED PROCESS:
Step 1 — Create Account & Verify: Sign up in seconds and complete KYC & age verification process to ensure a safe, premium community. Google sign-in available. 18+ only (or age of majority in jurisdiction).
Step 2 — Set Prices & Post Content: Monetize your way with Subscriptions, Pay-Per-View (PPV), Tips, and Paid DMs. You control ALL rates. Post photos, videos, audio, written content, stories.
Step 3 — Share Link & Withdraw: Share your FanLabz link, watch earnings grow, and withdraw money via Weekly or Instant payouts.

PAYOUT OPTIONS:
- WEEKLY PAYOUTS: Scheduled weekly disbursements to creator's payout method
- INSTANT PAYOUTS: Withdraw earnings immediately when needed
- Requirements: Valid payout method supported in your country + completed KYC/KYB verification + minimum payout threshold reached + tax compliance (W-9/W-8 for US creators)
- FanLabz may delay/pause payouts if: fraud suspected, policy violations, government requests, disputes under review
- External payout partners may charge their own fees — FanLabz not responsible for those

CREATOR DASHBOARD FEATURES:
- Track income in real-time
- Monitor DM performance and opens
- See subscriber count and growth
- Identify best-selling posts (highest PPV revenue)
- Manage subscriptions and tiers
- Access messaging templates
- Set coupons and bundles
- View earnings analytics by revenue stream

SMART MARKETING TOOLS:
- Coupons: Create discount offers to attract new subscribers
- Bundles: Package content for higher-value sales
- Mass DMs: Send monetized messages to entire subscriber list at once
- Message Templates: Automated messaging to boost conversions
- Profile sharing link: Share your unique FanLabz URL across all social platforms

SAFETY & SECURITY (NON-NEGOTIABLE PILLARS):
1. VERIFIED CREATORS: Full KYC (Know Your Customer) and age verification for ALL creators. No unverified accounts allowed.
2. AGE GATING: Fans must confirm they are 18+ before accessing the platform. Platform contains adult content.
3. DMCA PROTECTION: Fast 72-hour takedown system to protect creator content from unauthorized distribution. Content can be reported and removed within 72 hours.
4. FRAUD PROTECTION: Advanced fraud detection and chargeback protection to secure creator earnings. No surprise reversals.
5. TRANSPARENT FEES: Clear, published fee structure with NO hidden costs or surprise charges — ever.
6. PCI SECURE: Payment Card Industry compliant payment processing.
7. TWO-STEP AUTHENTICATION: 2FA via email code for account security.
8. reCAPTCHA Protection: Forms protected by Google reCAPTCHA.

AGENCY & MANAGER FEATURES:
FanLabz has a dedicated Agency Dashboard for talent managers and agencies:
- Dashboard access showing ALL creators under management
- Centralized control panel to monitor all creators' performance
- Separate creator wallets and individual performance analytics
- Revenue share and payout tracking built-in
- Automated commission calculations and transparent financial reporting
- Bulk onboarding and account migration tools
- Example agency stats shown: 12 Creators, $42.8K Monthly Revenue, 88% Average Payout
- Individual creator earnings visible: Creator Name $8,240 / Creator Name $6,150
- Book a Demo for agencies available

CONTENT CATEGORIES ON FANLABZ:
1. Beauty, Hair & Makeup
2. Business & Money
3. Cosplay & Anime
4. Education & Tutorials
5. Fitness & Wellness
6. Gaming & Streaming
7. Lifestyle & Vlogging
8. Modeling & Glamour
9. Music & Performing Arts
10. Photography & Digital Art
11. Others

CREATOR PROFILES (REAL EXAMPLES ON PLATFORM):
- ah-tester: $25.00/month subscription, Beauty/Hair/Makeup category, Pakistan, 2 posts, 1 photo, 1 video, member since Jul 23, 2024
- sarah: $75.00/month subscription, Modeling category, Pakistan, 1 post, 1 photo, member since Jul 23, 2024
- john-doe: $30.00/month subscription, Modeling/Influencer, Pakistan, 1 post, 1 photo, member since Aug 3, 2024
- Admin: Free subscription, Education & Tutorials, United States, member since Mar 13, 2021, 4 subscribers

FAN EXPLORER FEATURES:
- Filter creators by: Popular / Featured / More Active / New Creators / Free Subscription
- Filter by gender: All / Male / Female
- Search by creator name
- Browse by category
- Explore page shows locked posts that fans can unlock for individual prices (e.g., "Unlock post for $8.00")

PLATFORM RULES & POLICIES (KEY POINTS):
SUBSCRIPTIONS: Auto-renew unless cancelled before next billing cycle. No pro-rated refunds on cancellation — access continues until period ends. Tips and PPV are generally non-refundable.
CONTENT OWNERSHIP: Creators keep full ownership. FanLabz gets a hosting license only. Content NOT sold to other platforms.
PROHIBITED CONTENT: No minors or apparent minors, no non-consensual content, no doxxing/harassment, no illegal content, no copyright infringement, no extremist/hateful content, no self-harm promotion.
AGE REQUIREMENT: 18+ for ALL users. Creators must verify age. Fans acknowledge adult content on entry.
ACCOUNT SECURITY: Don't share passwords. KYC required for creators. Two-factor authentication available.
DISPUTES/APPEALS: File complaints via support@fanlabz.com. Appeals available for content removals. FanLabz decision on appeal may be final.
LIABILITY LIMIT: Max liability = fees paid to FanLabz in last 12 months OR $5,000, whichever is greater.
REFERRAL PROGRAM: May be available — details on platform. Abuse (self-referrals, fake accounts, bots) leads to forfeiture.
TAXES: Creators are solely responsible for their own taxes. FanLabz may collect W-9/W-8 forms.
GOVERNING LAW: State of Delaware, USA.

COMPARISON WITH COMPETITORS:
vs OnlyFans: FanLabz 88% payout vs OnlyFans 80% payout. FanLabz has instant payouts; OF has weekly only. FanLabz has agency dashboard; OF does not. FanLabz has mass DMs built-in. FanLabz has NO fees on first $1,000.
vs Fansly: FanLabz beats Fansly on payout rate (88% vs ~80%). FanLabz has dedicated agency tools.
vs Fanvue: FanLabz has lower fees than Fanvue per their own marketing claim.
KEY DIFFERENTIATORS: 88% payout rate, instant payouts, smart mass DMs, agency dashboard, no fees on first $1,000, 72-hour DMCA takedowns, fraud protection, transparent published fees.

NAVIGATION & LINKS:
- Sign up: fanlabz.com/signup (Google sign-in or email)
- Login: fanlabz.com/login
- Explore creators: fanlabz.com/creators
- Contact: fanlabz.com/contact
- Terms of Service: fanlabz.com/p/terms-of-service
- Privacy Policy: fanlabz.com/p/privacy
- Cookie Policy: fanlabz.com/p/cookies
- How it works: fanlabz.com/p/how-it-works
- Password reset: fanlabz.com/password/reset

SUCCESS STORY / TESTIMONIAL:
Alex Morgan, Photography Creator: "+42% Earnings, 88% Payout Rate, 2.1k Fans. Switching to Fanlabz doubled my monthly income while cutting my workload in half. The smart tools actually work!"

EARNINGS CALCULATOR (ACTUAL EXAMPLE FROM SITE):
Given: 1,000 subscribers × $15/month + 25 PPV sales + $500 in tips
→ FanLabz: $13,750/month take-home (88% kept)
→ Other platforms: $11,719/month take-home (70-80% kept)
→ Annual advantage: $24,372 more with FanLabz

TRUST INDICATORS:
- PCI Secure (payment security)
- Instant Payouts available
- Transparent Fees (published, no hidden costs)
- 24/7 Support
- KYC verified creator community
- DMCA protection with 72-hour takedowns
- Fraud and chargeback protection

=== END OF FANLABZ KNOWLEDGE BASE ===
`;

// ============================================================
// FILE STORAGE
// ============================================================
const LEADS_FILE = path.join(__dirname, 'leads.json');
const ANALYTICS_FILE = path.join(__dirname, 'analytics.json');

function loadJSON(file) {
    try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch { return []; }
}
function saveJSON(file, data) {
    try { fs.writeFileSync(file, JSON.stringify(data, null, 2)); } catch (e) { console.error('Save error:', e); }
}

// ============================================================
// CHAT ENDPOINT
// ============================================================
app.post('/api/chat', async (req, res) => {
    const { messages, sessionId } = req.body;

    if (!process.env.OPENAI_API_KEY) {
        return res.status(500).json({ error: 'OpenAI API key not configured. Please add OPENAI_API_KEY to your .env file.' });
    }

    // Analytics tracking
    const analytics = loadJSON(ANALYTICS_FILE);
    const session = analytics.find(s => s.sessionId === sessionId);
    if (session) {
        session.messageCount++;
        session.lastActive = new Date().toISOString();
    } else {
        analytics.push({ sessionId, messageCount: 1, startTime: new Date().toISOString(), lastActive: new Date().toISOString() });
    }
    saveJSON(ANALYTICS_FILE, analytics);

    const systemPrompt = `You are LABZ — FanLabz's official AI assistant. You are energetic, knowledgeable, creator-focused, and deeply invested in helping creators maximize their income on FanLabz.

YOUR PERSONALITY:
- Enthusiastic but professional — you genuinely care about creators' success
- Data-driven — you always cite specific numbers and facts from FanLabz
- Conversational and warm — not robotic or corporate
- Encouraging — help creators see the opportunity in front of them
- Action-oriented — always guide toward the next step

CRITICAL RULES:
1. ONLY answer using the FanLabz knowledge base facts below. Never invent statistics or policies.
2. ALWAYS respond in the SAME LANGUAGE the user writes in. Spanish → Spanish. Arabic → Arabic. French → French. Auto-detect perfectly.
3. Cite SPECIFIC numbers: "88% payout rate", "$24,372 more per year", "72-hour DMCA takedown", "no fees on first $1,000" etc.
4. When asked to compare FanLabz to competitors, be factual: FanLabz beats OnlyFans (80%), Fansly (~80%), and Fanvue on payout.
5. For lead capture scenarios (someone asking to get started, talk to team, need help), warmly invite them to share their name/email.
6. Never badmouth competitors rudely — state facts professionally.
7. Always mention the relevant links/URLs from fanlabz.com when helpful.
8. When someone asks about earnings, use the calculator example: 1,000 subs × $15 + 25 PPV + $500 tips = $13,750/month on FanLabz.
9. Be specific about what's ACTIVE now vs COMING SOON (Live Sessions and Digital Storefront are coming soon).
10. For creator questions about getting started, always mention the 3-step process and the "no fees on first $1,000" offer.

KNOWLEDGE BASE:
${FANLABZ_KNOWLEDGE}

RESPONSE FORMAT:
- Use **bold** for key numbers and important terms
- Use bullet points for lists of features
- Keep responses focused and scannable — creators are busy
- End with a clear call-to-action when appropriate
- Use relevant emojis sparingly but effectively (💸 ⚡ 🎯 📊 🛡️)`;

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: 'gpt-4o',
                messages: [
                    { role: 'system', content: systemPrompt },
                    ...messages
                ],
                max_tokens: 900,
                temperature: 0.5
            })
        });

        if (!response.ok) {
            const err = await response.text();
            return res.status(500).json({ error: 'OpenAI error: ' + err });
        }

        const data = await response.json();
        res.json({ reply: data.choices[0].message.content });
    } catch (err) {
        res.status(500).json({ error: 'Server error: ' + err.message });
    }
});

// ============================================================
// EARNINGS CALCULATOR ENDPOINT
// ============================================================
app.post('/api/calculate', (req, res) => {
    const { subscribers, subPrice, ppvSales, tips } = req.body;
    const s = parseFloat(subscribers) || 0;
    const p = parseFloat(subPrice) || 0;
    const ppv = parseFloat(ppvSales) || 0;
    const t = parseFloat(tips) || 0;

    const grossMonthly = (s * p) + (ppv * 8) + t; // $8 avg PPV price
    const fanlabzTakeHome = grossMonthly * 0.88;
    const otherTakeHome = grossMonthly * 0.75; // midpoint of 70-80%
    const monthlyDiff = fanlabzTakeHome - otherTakeHome;
    const annualDiff = monthlyDiff * 12;

    res.json({
        gross: grossMonthly,
        fanlabz: fanlabzTakeHome,
        other: otherTakeHome,
        monthlyDiff,
        annualDiff
    });
});

// ============================================================
// LEAD CAPTURE
// ============================================================
app.post('/api/lead', (req, res) => {
    const { name, email, phone, type, message, sessionId } = req.body;
    if (!name || !email) return res.status(400).json({ error: 'Name and email required' });

    const leads = loadJSON(LEADS_FILE);
    leads.push({
        id: Date.now(), name, email,
        phone: phone || '', type: type || 'General',
        message: message || '', sessionId: sessionId || '',
        createdAt: new Date().toISOString()
    });
    saveJSON(LEADS_FILE, leads);
    res.json({ success: true });
});

// ============================================================
// LEADS CSV EXPORT
// ============================================================
app.get('/api/leads/export', (req, res) => {
    const leads = loadJSON(LEADS_FILE);
    if (!leads.length) return res.status(404).json({ error: 'No leads yet' });
    const headers = ['id', 'name', 'email', 'phone', 'type', 'message', 'sessionId', 'createdAt'];
    const csv = [headers.join(','), ...leads.map(l => headers.map(h => `"${(l[h] || '').toString().replace(/"/g, '""')}"`).join(','))].join('\n');
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename="fanlabz-leads.csv"');
    res.send(csv);
});

// ============================================================
// ANALYTICS
// ============================================================
app.get('/api/analytics', (req, res) => {
    const analytics = loadJSON(ANALYTICS_FILE);
    const leads = loadJSON(LEADS_FILE);
    res.json({
        totalSessions: analytics.length,
        totalMessages: analytics.reduce((s, a) => s + a.messageCount, 0),
        totalLeads: leads.length,
        recent: analytics.slice(-5).reverse()
    });
});

// ─── Realtime Voice Agent — Ephemeral Token ──────────────────────────────────
const FANLABZ_REALTIME_INSTRUCTIONS = `You are LABZ — the official AI assistant for FanLabz (fanlabz.com), the creator monetization platform where creators keep up to 88% of their earnings.

BEGIN IMMEDIATELY — greet the user the moment you connect:
Say: "Hey! I'm LABZ, your FanLabz assistant. Whether you're a creator or a fan, I can help you get started, understand payouts, or answer anything about the platform. What's on your mind?"
Then listen. Do not speak again until the user responds.

SPEAK NATURALLY for voice — energetic, creator-friendly, concise.

KEY FACTS:
- Website: fanlabz.com | Email: info@fanlabz.com
- Creators keep UP TO 88% of earnings (platform fee: 12%)
- NO fees on first $1,000 earned
- Revenue streams: subscriptions, PPV, tips, paid DMs, live streams, agency tools
- Instant payouts, DMCA protection (72-hour takedown), agency dashboard
- Responds in any language — detect and match user's language`;

app.post('/api/realtime-token', async (req, res) => {
    try {
        const response = await fetch('https://api.openai.com/v1/realtime/client_secrets', {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`, 'Content-Type': 'application/json' },
            body: JSON.stringify({
                expires_after: { anchor: 'created_at', seconds: 1200 },
                session: {
                    type: 'realtime',
                    model: 'gpt-realtime',
                    instructions: FANLABZ_REALTIME_INSTRUCTIONS,
                    output_modalities: ['audio'],
                    audio: {
                        input: {
                            transcription: { model: 'whisper-1' },
                            turn_detection: {
                                type: 'server_vad',
                                threshold: 0.5,
                                prefix_padding_ms: 300,
                                silence_duration_ms: 600,
                                create_response: true
                            }
                        },
                        output: { voice: 'shimmer' }
                    }
                }
            })
        });
        const data = await response.json();
        if (!response.ok) return res.status(500).json({ error: 'Failed to create realtime client secret', details: data });
        const token = data.value || data.client_secret?.value;
        if (!token) return res.status(500).json({ error: 'No ephemeral token in OpenAI response', details: data });
        console.log('🎙️  Voice client secret — expires:', data.expires_at);
        res.json({ token, expires: data.expires_at });
    } catch (err) {
        console.error('Realtime token endpoint error:', err);
        res.status(500).json({ error: err.message });
    }
});

const frontendDist = path.join(__dirname, '../frontend/dist');

if (!isVercel && fs.existsSync(frontendDist)) {
    app.use(express.static(frontendDist));
    app.get('*', (req, res) => {
        res.sendFile(path.join(frontendDist, 'index.html'));
    });
}

const PORT = process.env.PORT || 3000;
if (!isVercel) {
    app.listen(PORT, () => {
        console.log(`\n💸 FanLabz AI Chatbot → http://localhost:${PORT}`);
        console.log(`📧 info@fanlabz.com | www.fanlabz.com`);
        console.log(`\n${process.env.OPENAI_API_KEY ? '✅ OpenAI key loaded' : '❌ Add OPENAI_API_KEY to .env'}\n`);
    });
}

module.exports = app;