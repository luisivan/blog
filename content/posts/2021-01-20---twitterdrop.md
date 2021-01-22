---
title: The Tweetdrop
date: "2021-01-20"
template: "post"
draft: false
slug: "tweetdrop"
category: "Crypto"
description: "A novel mechanism for viral token distribution leveraging Twitter."
socialImage: "/media/tweetdrop.jpg"
---

![](/media/tweetdrop.jpg)

Tim Draper invented viral marketing by [convincing the Hotmail cofounders](https://techcrunch.com/2009/10/18/ps-i-love-you-get-your-free-email-at-hotmail/) to insert signatures at the end of each email:

> PS: I Love You. Get Your Free Email at Hotmail

The best way to spread a product is to get users to share it with their peers.

This is as true as ever in crypto, where users have a financial stake and thus a vested interest to spread the network's adoption.

We have seen many great token distribution experiments lately. We have also seen plenty of distasteful airdrops. What sets a genius token distribitution apart from a distasteful airdrop? Great token distributions reward early adopters and make them feel engaged with the ecosystem.

For example, I'd like to draw attention to [Uniswap's UNI distribution](https://uniswap.org/blog/uni/). Uniswap already had all the elements needed to reward its early adopters, which were:

- Tamper-resistant *proof of usage*, as trades settle on-chain
- Ethereum addresses to send UNI to, as trades contain user addresses

But not all projects have on-chain products, or even just a fair, straightforward way of measuring usage to calculate rewards. I started thinking about the most generic way to reward early supporters and followers, while creating virality around the distribution.

Uniswap's distribution was extremely viral because it was the first significant token distribution rewarding users of a major protocol. But in a very competitive landscape, chances are that similar ones wouldn't make as much noise if they launched today.

If you think about the crypto ecosystem, most people hang out on Twitter. And on Twitter, it only takes one person posting for hundreds, thousands or even millions to read that post.

So, what if we used Twitter as a platform for token distributions?

A project like [Aragon](https://aragon.org) has over 75,000 Twitter followers. All of them know Aragon, but not all of them hold ANT — since there are 25,000 ANT holders. Chances are that if they have been following Aragon for a while, they would be quite happy to own some ANT, and some of them might engage with the network.

We might even be able to use Twitter's API to reward followers based on how early they followed the project — similar to how Uniswap rewarded early LPs.

This would be an interesting token distribution mechanism, rewarding loyal followers and supporters.

But where this token distribution mechanism shines is in virality. Uniswap already had all the Ethereum addresses of its users, so it was straightforward for them to issue UNI to their accounts. Twitter profiles don't have Ethereum addresses linked to them (yet). One of the only ways for this distribution to be technically possible is for users to post a tweet stating they want to participate, together with their Ethereum address.

> As an early follower of Aragon's fight for freedom, I would like to receive ANT to participate in the governance of the upcoming Aragon Network DAO #ANDAO 0x123

That's not only 50,000 (75,000 Twitter followers - 25,000 existing ANT holders) possible network participants that we have activated, but possibly hundreds of thousands or millions of people that will hear about Aragon for the first time.

Meet the *tweetdrop*.

Then, after fetching all the tweets using Twitter's API, a Merkle tree can be constructed and with its [corresponding Merkle distributor](https://github.com/Uniswap/merkle-distributor) for redeeming the tokens. And that's it.

## The caveat

We have educated users to disregard token distributions on social media. If you have lived through the 2017/18 bull run, you know what I'm talking about.

But in 2020, exploring new ways of distributing network ownership became a trend. With that new trend, it is likely that we will have to re-educate our users about what's okay and what's not.

We are just scratching the surface of token distribution mechanisms, and it is a matter of time that they will leverage social media.

*I will likely propose for Aragon to do a tweetdrop in the future, if there is strong community interest.*