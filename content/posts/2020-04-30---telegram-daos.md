---
title: Telegram DAOs
date: "2020-04-30"
template: "post"
draft: false
slug: "telegram-daos"
category: "Crypto"
description: "Let's go where existing internet communities live and supercharge them with crypto. Let's take DAOs to Telegram!"
socialImage: /media/cells.jpg
---

![](/media/cells.jpg)

DAOs are a foreign concept to most. But, in essence, **DAOs are communities**.



In fact, DAOs are the evolution of Web2 — the social web. Thanks to social media platforms, social capital mobilized to the internet.



Since then, the most populated country on Earth is not China or India anymore — it's **Facebook**. Centralizing so much power on Facebook is dangerous, since [it is effectively a dictatorship](https://www.cnet.com/news/facebook-ceo-mark-zuckerberg-reportedly-overhauled-board-to-assert-more-control/). I [wrote](https://luisivan.net/posts/facebook-serving-fake-news-is-not-the-problem-we-should-look-at-88b9f51212dc) about its risks in the past.



But we shouldn't negate that social media platforms are the **largest distribution channel** for technology now. By deploying a Facebook chatbot you can reach 2bn users. By deploying a Telegram bot you can reach 400m users. So...



>  If you can't fight them, join them



**DAOs supercharge internet communities with financial capital**.

They give communities the ability to attract contributors, pool resources, govern those resources together and incentivize contributions.

**DAOs are where social and financial capital meet**.



But DAOs are dependent on communities. A DAO is just a bunch of on-chain code without a community.



The great thing is that internet communities already exist. And they have a lot of tools at their disposal! People are already discussing and organizing on the internet. We should **empower those communities with new tools**.



Some of the main tools that DAOs offer, described in layman terms, are:

- An internet bank account
- Digital membership
- Voting to collaboratively make decisions
- Incentive systems that to economically reward contributors and early adopters



What if we target the 400m Telegram users and offer them a way to supercharge their Telegram groups with those features?



Give each Telegram group an **internet bank account**.

Give them a way to **charge for membership**.

Give them a way for people to **make decisions together** within their chat.

Give them an incentive game to **reward early adopters and contributors**.



## A possible implementation



My cofounder and me came up with this implementation for what we called a *Telegram DAO*.



It's trivial to build and it mostly requires **plumping pieces together**.

The hard parts, namely the DAO infrastructure, subjective oracle, DEXes and on-ramps are already there.



In this simple model, the discussions and governance of the DAO happen in a **Telegram chat**. It could work in other chat platforms as well.

![img](https://lh3.googleusercontent.com/QJ7Smqh8gZRgKI0fVAkj2Yuo-vp2aAGUXmudlzLxHg1UMRTeRaITFplCh29mSxUFdQUZqgD6XwB2MN008LoBMI0AWIbLvuNQpWnut4Er7SNDs-qzCmw9V3OTXXVpYq7ueHP0w6O0)

Members create an account using their phone number ([Fortmatic](https://fortmatic.com/)). Then they can join the DAO by **purchasing the DAO's token** using their credit card or Apple Pay ([Uniswap](http://uniswap.exchange/) + [Wyre](https://www.sendwyre.com/)/[Ramp](http://ramp.network/)).



Previously the DAO had minted its own tokens and put some of them on a [Uniswap pool](https://defiprime.com/uniswap-liquidity-pools) for public trading. The DAO also **retains some of them** to capitalize itself.



After members have acquired tokens, they are invited to the chat group. The chat group gives them **right to discuss and take part in decision making**.



Voting can be done the built-in [Telegram polls](https://telegram.org/blog/polls-2-0-vmq).

This is the most interesting part: using a subjective oracle like [Aragon Court](https://aragon.org/aragon-court/), the vote doesn't need to happen on-chain.

Instead, a *witness bot* may be invited in the group. This witness bot has permissions to propose withdrawals from the DAO. It can only propose, not unilaterally withdraw. Per the [subjective agreement](https://blog.aragon.one/aragon-agreements/) in the DAO, the bot may only propose withdrawals if, for example, a Telegram poll has more than 50% acceptance.

There is a period of time, let's say a few hours, where the withdrawal can be disputed in Aragon Court. The witness bot has some stake in Aragon Court, and thus can be penalized. If the witness bot has proposed a withdrawal but there wasn't enough support in the Telegram poll, then anyone can open a dispute. Jurors will review and penalize the bot if misbehaving.

Using this pattern, we can have **infinitely scalable and frictionless votes**.

There is always the issue that Telegram could censor or tamper the voting. If that happens, members could **fallback to the censorship-resistant** [Aragon Voting app](https://help.aragon.org/article/19-voting).



Members can always exit by selling their membership. By doing so, they **lose access to the chat group** — hence there's social capital in the line too. They can always sell part of their tokens to profit, if they don't sell them all or fall under a certain threshold.



Tying economic value to membership of the group is also a very generic model. And since what’s being bought is membership and not some future rights, it could help from a regulatory perspective.



## Summary

We should **go where existing communities live** and supercharge them.

DAOs offer new tools to **attract**, **incentivize** and **reward** contributions that would be very useful if embedded into **existing social platforms**.



Onboarding should be as easy as writing your phone number and credit card.

Voting should be as easy as getting a push notification and clicking a button.



The particular implementation described here is just one possible model. Thanks to the [modularity](http://hack.aragon.org/) of current DAO frameworks, the sky is the limit.



The point is that the building blocks are now ready — now it’s just a matter of plumbing things together!



*Thanks to Luke Duncan and Burrrata for providing feedback on this post, and to my cofounder Jorge Izquierdo for the back and forth on the ideation.*