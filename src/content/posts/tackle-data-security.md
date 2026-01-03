---
date: 2021-04-01
title: 'How to maintain data security & tackle data leaks?'
template: post
hidden: false
thumbnail: '/thumbnails/shield.png'
featuredImage: '/images/post-images/data-leak.jpg'
description: Because of increasing data leaks, attacks on organizations by nation-state actors, data security is essential. This article gives an overview of processes one needs to establish, talks about what is at stake. 
slug: data-leaks-tips
tags:
  - data-security
  - tech
---

I was seriously disturbed to see yet another [data leak](https://www.businesstoday.in/current/corporate/hackers-allege-data-35-million-mobikwik-users-up-for-sale-on-dark-web-company-junks-claims/story/435196.html) from a mobile wallet company. More difficult they have [denied](https://twitter.com/MobiKwik/status/1367489330902675463?s=20) it, outright! 

There is an ongoing trend in the Indian Tech Startup world — Data leaks. 😔

India is a country with more than a billion people. India is set to become the internet powerhouse with more and more people accessing the internet for the first time. There is a huge opportunity to solve significant problems not only for the market but to try and test locally before going global. 

Many [B2B SaaS companies](https://www.freshworks.com/), [Developer Tools](https://postman.com), [Payment Gateway](https://razorpay.com) companies, and [Consumer Service](https://dunzo.in) startups were solving excellent problems, making lives easier. For the last three months, I've never visited any ATM to withdraw cash. All my payments are made digitally.


However, the disturbing thing I notice in the ecosystem is many founders/tech teams from these organizations think about Security at the last moment of the engineering development/release process. 

Some founders don't focus on the business's security aspect these days while promoting the tech culture and the "safe" customer experience. 

Some examples —

- A semi-famous sports news media organization woke up one day to see that a section on their website doesn't work. After the detailed check, they found that their core content database was hacked, data deleted, the attacker is demanding a bitcoin payment to return the data. Generally, there is nothing to worry about if it is static, non-personal, public data, and the organization has a backup of the content. Funnily, they weren't able to restore the backups, hence lost the data in the wind. They have hired a security consultant to audit the processes after that, who charged handsome fees.
- A famous wallet company which is also one of those first digital-native startups from India, once left their wallet transaction history of a user open. The only thing one needs to get is a user identifier and figuring out how it is generated. Give a simple REST call to the API endpoint, bingo! You will find everything.

There are many more leaks in recent years ranging from leaking location info of users to credit card numbers. 

# Where is the problem?

> Security is a mindset and not a process!

Often I see many think about Security as a step to review or a checkbox. It is neither. 

Security is a mindset that the organization should adopt right from the founders, C-level, to developers. As much as the team needs to be motivated by its mission, it is equally essential to provide a secure customer experience. A safe customer experience invokes trust, transparency. Once you get in on a trust cycle with your customer, you could avoid churn from the platform forever—for example, Apple's iPhone.

Most founders in India build the brand, do customer acquisition campaigns, focus on GTM's but forget how a simple data security lapse can cause distrust and hurt growth forever... 

# How to fix it?

Well, buy this software. 😉

That is not the intention of this blog post. No one can buy software or a tool to get this done in a single shot. Like I stated above, Security is a mindset. 

Few high-level suggestions to develop such a mindset —

- Thinking about the basic security level you think is needed for your product right from the feature ***Design*** stage.
- Do not get more data from users if you don't need it or use it. More importantly, personal data.
- Taking training at the organizational level on the Security front, be it C-level leaders or engineers.
- Making sure the engineering team gets time to implement/follow best security and audit practices. Celebrate the discovery of security lapses, do not blame.
- Implementing security, data sharing policy, and making sure all new joiners to the team or organization understand at least the essence of it.
- Ensure every release cycle is going through a security audit.
- Establish & Invest in at least a simple Security Operations Command Center. There are many free tools, Open source stacks available to implement SIEM/SOC/SOAR. You need a skilled employee to run it.

Extra(mile) suggestions —

- Review your tech stack regularly for vulnerabilities, security updates. Remember, some updates might disrupt your service. Still, if it is mandatory for user security, you need to perform it.
- Comply with the global best security and privacy practices like GDPR.
- Participate present in various domain-related industry conferences to understand/share your best practices. Equally, learn from them.

These are a few that are on top of my mind, and there could be more.

# What if I'm already in soup?

Suppose you have discovered that your data is already breached and irrecoverable. The brand damage is imminent. It will be more dangerous if you are not straight in admitting the fact further. It is like you are closing your business forever for your customers, behave irrationally at a critical time.

Few tips, again to handle such situation — 

- Convene a meeting with the leadership team, in some cases also your investors, board. Discuss the following steps on how to disclose and **NOT** how to hide 😅
- Inform all impacted customers if anything is to be done from their end, create a helpline or a resource center to handle queries/concerns.
- Write a public blog post on the same and share what you are doing to improve the current situation. State short-term, mid-term, long term plans on how you're going to get better.
- Work with the PR team to share your commitment to popular industry newspapers, digital media, etc.

 During a data breach, the most important thing is the **PLAN**—how you go ahead and remediate the situation. 

I'm happy to get on a call to offer more help if you are looking to build a Security mindset in your organization. 🙂  You can reach out to me on my [Twitter](http://twitter.com/aravindputrevu) or [linkedin](https://linkedin.com/in/aravindputrevu). Happy to help!

