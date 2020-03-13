---
title: Bitcoin Unlimited is a bug by itself
date: "2017-03-22"
template: "post"
draft: false
slug: "bitcoin-unlimited-is-a-bug-by-itself-bfa959acf365"
category: "Crypto"
tags:
  - "Bitcoin"
description: ""
---

I’ve been involved in Bitcoin since 2012 and never felt the need to write a post about its state, but we all have to stand up for decentralization now.

If you don’t know what’s Bitcoin Unlimited, I’ll explain the whole story.

**Bitcoin as-it-is is hardly scalable**. The theoretical number of transactions per second is in the single digits. There’s a block each ~10mins, and each block is 1MB.

Developers have proposed various solutions during the years.

The one that **miners have been supporting** lately **is Bitcoin Unlimited**.

Bitcoin Unlimited takes a very simple approach to scaling. Let’s make the blocks bigger, that should work! Let’s hope users and miners will reach *emergent consensus* over the block size, and live happily ever after!

But **the consequences of leaving the block size open to the miner consensus are terrible. They centralize the currency**. I’ll explain why.

## Making mining an oligopoly

Top miners would be incentivized to **push the block size even more**, to push out some of their competition. Some miners wouldn’t have the computing power, or it wouldn’t be cost efficient for them to process larger and larger blocks, so **they would retire**.

Repeat that process slowly, kicking out a low percentage of miners each time, and **you would have taken over Bitcoin**. You would own and control it. It’s true that even if that happens, miners couldn’t do certain things — for example they can’t fake a transaction for you. **But they could double spend, meaning that the currency is worthless.**

If mining is very centralized now, imagine with BU. Basically a very powerful miner called Jihan Wu would control it.

## Ending full nodes

Today’s block size is 1MB. With that block size, the blockchain already is >100GB. **I can run a full node on my 1TB disk**.

**But if the block size was 10MB, I couldn’t**. Meaning that soon **I wouldn’t be able to run my own full node, and should trust others**.

Decentralized, trustless currency? No more.

So Bitcoin Unlimited is a huge bug itself. It’s a joke. It’s a way of **selling a soon-to-be centralized coin as if it was Bitcoin**. It’s bundling a backdoor into Bitcoin so a couple miners can control it.

And this is just from the technical standpoint. I won’t go into the specifics of what the **BU mafia has done** to promote their interests. Or into **their nonexistent programming skills**, bundling critic bugs into their software. That could be another very long story. They’re toxic.

## Okay… what’s the solution then?

**SegWit** (Segregated Witnesses). SegWit solves a well known problem called transaction malleability.

Transactions have identifiers. Right now, creating a transaction it will have a certain ID. But if I create the same transaction and re-sign it, the cloned transaction will have a different ID from the original. So it may spend the same coins, but the transaction will have a different ID.

Malleability was the major hurdle for **payment channels**, which can make Bitcoin **infinitely scalable**.

So with SegWit, you can have both **millions of transactions per second** and **instant confirmations**.

## Why miners don’t like it?

![](https://cdn-images-1.medium.com/max/2000/1*Z6VQRfZkMAn20Th_iwak0w.jpeg)

They now have **the opportunity to become decision makers at the protocol level**. If they can decide the block size, they can decide how the game works.

If Bitcoin scales by moving a lot of transactions out to a second layer, miners will just be players of the game, not masters.

Mining would continue being a competitive market and they would continue being just miners.

So now it’s their only opportunity to take over and control the currency.

## Will there be a hard fork?

Bitcoin Unlimited would need a **hard fork**. Meaning that at some point there will be two parallel Bitcoin realities. That’s contrary to SegWit, which would need only a **soft fork**.

It’s true that in the event of a BU hard fork, BU would probably have the majority of the hash rate (computing power) devoted to it.

Does it make it the legit chain? Nope.

Normally we would say that the longest chain, and the one with more hash rate is the legit one.

Yet that chain would have a built-in bug to become centralized. So it’s not secure. **Even Dogecoin would be more secure than BU**.

![](https://cdn-images-1.medium.com/max/2688/1*McEBxOhjS1srrDAE38VpXw.jpeg)

## Should I sell all my BTC?

First of all, I’m not giving any investment advice.

I’ll tell you what I’m gonna do if the fork happens.

Before it happens, I’m gonna sit down, serve a cold drink, and buy more BTC. After it happens, I’m gonna do exactly the same. In the process, I’ll watch that BU shitcoin crash and burn.

## Bitcoin Unlimited = centralized Bitcoin

Bitcoin is valuable because it’s **decentralized**. If it stops being, it’s worthless. So **Bitcoin Unlimited is worthless**.

Long live Bitcoin Core, long live SegWit and **long live decentralization**!

*PS: I love Ethereum and their research on PoS. I’m so looking forward for them to switch.*
