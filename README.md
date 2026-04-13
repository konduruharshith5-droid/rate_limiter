# Rate Limiter

A simple and efficient implementation of a **Rate Limiter** designed to control the number of requests a user/client can make to a system within a given time window. This helps protect APIs and services from abuse, overload, and ensures fair usage.

---

## Features:

- Limits number of requests per user/IP/token
- Configurable time window (seconds/minutes)
- Configurable request threshold
- Supports common rate-limiting strategies:
  - Fixed Window
  - Sliding Window
  - Token Bucket
- Lightweight and easy to integrate
- Can be used in APIs, backend services, and middleware

---

## Why Rate Limiting?

Rate limiting is important to:
- Prevent API abuse and DDoS attacks
- Ensure fair usage among users
- Maintain system stability and performance
- Control server load and costs

---

## How It Works:

The system tracks incoming requests based on a unique identifier (such as IP address or user ID).  
If the number of requests exceeds the allowed limit within a defined time window, further requests are blocked or throttled.


---

## Tech Stack:

- Language: Node.js 
- Storage: mongodb 
- Framework: Express

---

## sample code(python):

class RateLimiter:
  def __init__(refill_rate):
    self.refill_rate = refill_rate
    self.last_refill_time = time.time()
    self.capacity = 5

  def implement():
    now = time.time()
    elapsed = now - self.last_refil_time

    result = elapsed * self.refill_rate
    self.refill = min(self.capacity, self.refill + result)
    self.last_refill_time = now
