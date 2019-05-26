---
title: Idea for a decentralized, open source platform for deep machine learning advancement
date: "2017-01-25"
template: "post"
draft: false
slug: "/idea-for-a-decentralized-open-source-platform-for-deep-machine-learning-advancement-b5b031e8f6f7"
category: "Crypto"
tags:
  - "AI"
description: ""
---

I wouldn’t like living in a world where two companies are smarter than everyone else. So ~9 months ago, I had an idea about a system that would set the incentives right for entities to collaborate on the advancement of machine learning algorithms. It’s called **DecentralizedAI** (yeah, super creative name). At first, I thought about getting a whitepaper out of it. But I don’t have either the time or the technical knowledge in machine learning to make it possible. Thus I’m posting my thoughts just in case they’re useful.

I also became aware of projects like [Golem](http://golemproject.net/) and hope this can add something to their thought process. I think this particular problem is deep enough to deserve its own very tailored solution.

DecentralizedAI is a trustless, decentralized, open source platform for deep machine learning.

It is implemented as a set of contracts using the Ethereum blockchain. Those contracts enable the creation of networks of nodes that will compete and will be rewarded for training a neural network. These contracts also provide a mechanism to reach consensus on the training set that will be used to train the neural network.

## 1. Introduction

With the progress in artificial intelligence (AI), we are seeing how machines start to understand our world. They perform [84% of all the trades in the US stock markets](http://www.ft.com/intl/cms/s/0/da5d033c-8e1c-11e1-bf8f-00144feab49a.html), they drive cars in our highways, they help us treat patients, they create beautiful music, they write some of the headlines we read… they even suggest us what to reply to our friends.

This has been thanks to both the talent working on machine intelligence in the past decades**, the big improvements in computer performance thanks to Moore’s Law and the phenomenon of big data**, which has brought us large datasets to train the neural networks with.

However, only a few companies that have accumulated this huge training sets are taking most of the benefit. With today’s state of the art, those who own the data and the computing power to train the machine are the clear winners and can create a huge disparity with the rest of the world, by being exponentially more intelligent.
> Citing Elon Musk: *“If AI power is broadly distributed to the degree that we can link AI power to each individual’s will — you would have your AI agent, everybody would have their AI agent — then if somebody did try to something really terrible, then the collective will of others could overcome that bad actor”*

Instead of going on with the status quo of companies having their own deep learning silos, we aim to provide the necessary incentives for them to collaboratively create optimal training sets and open the training process to the free market.

## 1.1. Driving factors

Artificial Intelligence (AI) has been around for quite a long time. One could argue wether we are very close or extremely far to reach singularity, which is the point when machine intelligence **surpases human intelligence, therefore improving themselves exponentially in a recursive cycle hard to imagine today.**

What no one could argue now is that the set of techniques developed in the field of AI are of great use in today’s world.

The best example of AI in the wild may be deep machine learning, which is a set of advanced statistical techniques, which coupled to the access to large amounts of data and fast computers can produce surprising results.

For example, for many programming a machine that could outplay the world’s champion on the ancient game of Go was near the impossible. In March 2016, AlphaGo won 4 out of 5 games of Go in a match with Go champion Lee Sedol, [becoming the first computer Go-playing system to beat a professional human Go player without handicaps](http://spectrum.ieee.org/tech-talk/computing/networks/alphago-wins-match-against-top-go-player).

Some of the most successful deep learning methods involve artificial neural networks, which were originally based on biological observations of the primary visual cortex.

Deep machine learning techniques use a cascade of many layers of nonlinear processing units for feature extraction and transformation. Each successive layer uses the output from the previous layer as input.

We could say we are living in the third AI spring. The Internet, the bandwidth increments and the advent of data sharing, have brought us to a point in which we can train neural networks getting incredible results.

However, these datasets are usually owned by large corporations, that also own the means to run intensive training processes.

And, in the world we live, where intelligence is everything, we don’t want to end up with a couple corporations owning the world’s most intelligent machines. Citing Musk again: *“I don’t know a lot of people who love the idea of living under a despot”*.

## 1.2. Decentralization

Decentralized networks have been around for a while.

The aim of DecentralizedAI is to provide a way to train neural networks that incentivizes data sharing and competitive training — these two are the key points to democratize AI.

This requires decentralized consensus, which requires solving [The Byzantine Generals Problem](http://research.microsoft.com/en-us/um/people/lamport/pubs/byz.pdf).

Thankfully, this problem has been already solved by [Bitcoin](https://bitcoin.org/bitcoin.pdf) and its append-only, decentralized ledger, the blockchain.

The blockchain is all about consensus and network effects, which define how reversible transactions are.

Creating another blockchain for DecentralizedAI is discarded because a fresh start would mean an insecure network until we arrive to the point of having strong network effects.

In other hand, [Ethereum](http://gavwood.com/paper.pdf), a public blockchain-based distributed computing platform, featuring smart contract functionality. It provides a decentralized virtual machine, the Ethereum Virtual Machine (EVM), that can execute peer-to-peer contracts using its own cryptocurrency called ether.

Ethereum has already surpassed the $1bn market valuation, which should be a great proof of the strength of its network. It also has a very powerful way of defining contracts in a language called Solidity, which is similar to a strongly typed compiled Javascript.

[Rootstock](https://uploads.strikinglycdn.com/files/90847694-70f0-4668-ba7f-dd0c6b0b00a1/RootstockWhitePaperv9-Overview.pdf) is another interesting alternative. It is EVM-compatible while being backed by Bitcoin, which is the strongest blockchain to date, surpassing $14bn in market cap.

Rootstock uses 2-way peg to Bitcoin and rewards Bitcoin miners via merge-mining.

It is still in the testnet phase and will be ready for production use in the future. In the meantime, Ethereum is our platform of choice.

## 2. Components

DecentralizedAI will allow anyone to create *training groups, *which are groups of nodes that collaborate together to reach consensus on a training set and compete to train it.

Each training group’s components are:

* A network that reaches consensus on a training set (the input) and a model for the AI.

* A set of computers (*trainers*) which will train the given model with the given input, and compete on their speed to train the AI, that is, to reach the lowest training loss. The lowest [loss function](https://en.wikipedia.org/wiki/Loss_functions_for_classification) represents a great measure of the progress training the neural network. This could be compared to the miners on a [Proof-Of-Work](https://bitcoin.org/bitcoin.pdf) scheme.

## 2.1. The training set and the model

The training set is the data on which the machine learning programs learn to perform correlational tasks.

The model is the structure of the neural network that will be used to train the network.

Consensus will be reached to periodically modify the training set. Since humans would have to vote on the next delta to modify the training set, this timeframe will be set to a week.

After training, checkpoints are created, which basically are representations of the state of the neural network.

Modifying the input shouldn’t suppose any substantial damage to the learning process, however, modifying the model could.

For that reason, while training set modifications will be regular, model modifications will be provided as a hard fork feature in the protocol.

Nodes can suggest changes to the training set, and after a period of time the most voted set of changes will be applied.

Everyone can propose changes and vote anytime, but the network will reach consensus on which data to add to the training set once a week. This period of time is arbitrarily set and a majority of the training group’s stakeholders will be able to change the period’s length for the group.

Since Ethereum calls require gas to perform transactions we do not need to worry about preventing spam.

Nevertheless, with the purpose of incentivizing great proposals to the training set, the winning proposal will be rewarded.

## 2.2. The trainers

The trainers are allocating their computing power to train the latest checkpoint with the consensual training set and model, and their objective is to be the fastest in training it during a limited period of time, which would be the equivalent of a block in a blockchain.

The trainers are required to broadcast their checkpoint, in order for the rest of the network to verify that the given checkpoint has a smaller loss than the one in the current block.

After that, the winner trainer will be able to redeem a the equivalent of a [coinbase transaction](http://gavwood.com/paper.pdf), that will give him tokens in exchange for this effort.

You could think of the training process as it was [Proof-Of-Work](https://bitcoin.org/bitcoin.pdf).

## 2.3. The token

A token is necessary for two main reasons:

* To incentivize the trainers to allocate resources to the training process, providing a unified currency that can be earned by contributing to any training group

* To incentivize great proposals by rewarding the most voted changes in the training set in the current block

This token will be called neuron (N or NRN).

The token’s initial supply will be well distributed in a sale event, and the number of tokens issued will be the same as the tokens purchased on the sale event.

Additional tokens will be issed by coinbase transactions to both trainers and winning proposers. As the initial supply will not be known in advance, the rewards will be set on a variable basis.

The rewards could be:

* 0.001% of all the issued tokens will be rewarded to trainers for each successful block

* 0.0001% of all the issued tokens will be rewarded to proposers for each winning training set addition

The rewards will halve every 4 years, betting on the improvements on hardware, machine learning techniques and energy that we will possibly experience and that will lower the trainers’ cost.

## 3. Implementation

## 3.1. Token

The token contract should be a ERC20 token whose only mission is to keep track of the supply and to let token owners transact.

## 3.2. Training set

The training set contract should be a contract whose mission is to keep track of the consensuated input in a training group.

For the purpose of traceability, the input will be a list of deltas. Each delta will be a [patch file](https://en.wikipedia.org/wiki/Patch_(Unix)) that indicates what to add and what to remove from the previous training set.

Since the training set can get very large, we will store only the hashes of the deltas as a checksum. The deltas themselves will have to be broadcasted and stored by other means. In this case, we pick [IPFS](https://github.com/ipfs/papers/raw/master/ipfs-cap2pfs/ipfs-p2p-file-system.pdf) because an explicit economic incentive for the nodes to store the content is not needed: they are already incentivized to participate in the system and they need to store the data in order for them to do so.

Applying all the deltas in a chronological fashion, we arrive to the current training set. All the participating nodes in a training group shall keep an up-to-date form of the group’s training set.

## 3.3. Training

The trainers will keep an up-to-date copy of the training set, and will train the model with it.

The trainers will be able to access the latest block loss, and when they produce a checkpoint with a lower loss than latest block’s, will broadcast and sign their checkpoint to all the training group’s nodes.

The wisdomkeepers will download the checkpoint and verify that for the given input and model, the checkpoint achieved a lower loss. During a period of time, they will vote on the winner checkpoint.

When the period ends, a coinbase transaction will be issued to the trainer that broadcasted that checkpoint first and that produced its signature.

The training contract should consist of a way to list of all the suggested checkpoints, their proposers and their votes.

Since checkpoints can get very large, we will only store their hashes in the contract, and we will forbid sending the same hash twice, to prevent replay attacks.

## 4. Conclusion

The aim of DecentralizedAI is to democratize machine learning by providing the incentives to keep training sets public and lowering the training cost by creating a free market of participant trainers.

Thanks for reading! If you have any questions or feedback, just ping me.

I’d love for anyone who has deep knowledge in machine learning to actually build something like this. **The world needs it**.
