---
title: The power of knowledge graphs
date: "2018-07-18"
template: "post"
draft: false
slug: "the-power-of-knowledge-graphs-7755f29fa2ab"
category: "Productivity"
description: "Reducing the gap between language and code"
---

Back in the day, when I was starting [Unpatent](https://blog.unpatent.co/introducing-unpatent-e9ec7b980986) with Jorge, we were thinking about **how to teach machines to invent**, so they could timestamp [prior art](https://en.wikipedia.org/wiki/Prior_art) before a patent troll could file a patent.

We explored a lot of options, from graph databases to scraping the [USPTO](https://www.uspto.gov/) and running machine learning models over it.

Finally, we concluded that in order to meaningfully generate new ideas, we needed computers to **understand the map of existing ideas** first.

The general idea was as follows:

* A bike has wheels

* Wheels allow for movement

* Motors can help wheels boost movement

* Therefore a valid new idea could be *bike + motor = motorbike*

For a computer to understand that, you would need to **map all humankind’s knowledge in a graph**. There have been [some attempts](https://en.wikipedia.org/wiki/Cyc) at doing so, and we even tried to leverage on those for Unpatent:

![](https://cdn-images-1.medium.com/max/2048/1*8v20riQ1mTQ2DtyKYCozYA.png)

But the issue is always language. Language is subjective by design. **Words don’t have formal specs and implementations**, like software does.

**Language is [wet code, not dry code](http://unenumerated.blogspot.com/2006/11/wet-code-and-dry.html)**. This makes it so hard for computers to enter our world, understand it and build on their own.

Today I won’t go into the AI rabbit hole, but rather on how we can improve our systems **today** using tools to reduce the gap between language and code.

Currently, Wikipedia defines motorbike as:
> A motorcycle, often called a bike, motorbike, or cycle, is a two- or three-wheeled motor vehicle

This doesn’t tell us much, specially about what it needs to be in place in order for something to be a motorbike. In an idyllic world, **a word would take meaning because of its place in the knowledge graph.**

For example, motorbike would be roughly defined as follows:

![](https://cdn-images-1.medium.com/max/2000/1*IZ11zX-6SC0AcbM_1zz4ZQ.png)

Of course this would be inside an infinite graph, so *Motorbike* would be related to *Transportation* somehow and *Battery* would be indirectly related to *Wind* or *Solar*.

Also, the above could be expressed as code:

    graph TD
    MB[Motorbike] -->|Needs| W(Wheels)
    MB[Motorbike] -->|Needs| M(Motor)

    M(Motor) -->|Needs| E(Energy)
      E(Energy) -->|Is| F(Fuel)
      E(Energy) -->|Is| B(Battery)

    M(Motor) -->|Powers| W

    MB[Motorbike] -->|Needs| D(Driver)
      D(Driver) -->|Is| H(Human)
      D(Driver) -->|Is| C(Computer)

This gives us some interesting properties:

* By charting the relationship between words, we **enclose their meaning and reduce subjective interpretation**

* As it is a graph, you can join it to other graphs, the same way you **import code** or packages. This reduces the need to re-define since you could **rely on a few very well vetted definitions**

* As it can be expressed as code, we can have **commit history and diffs** in order to see **how this knowledge and its meaning evolves**

* We can do some basic **testing** to see if our whole graph computes! For example, we could **catch conflicting definitions inside a graph**

This can now sound very abstract. What are the use cases, apart from AI?

I’ll enumerate a few:

* Formalize **governance processes**, thus increasing transparency and reducing subjectivity

* Write down company processes, to **summarize flows** in a concise manner

* **Graph out the values or the manifesto of a community**, to make sure it always follows them

## Next steps

I just discovered **[Mermaid](https://mermaidjs.github.io/)**, which is a tool that allows to quickly chart by using code. I have been looking for something like this for a long time.

Now **I plan to start writing code for multiple processes I want to formalize**, and also for my own knowledge and mental models I have been accumulating from life and reading.

I’m genuinely amused by knowledge graphs, and I think they could help **reduce misinterpretations** and **improve accuracy** in how humans and organizations communicate their view of the world.
