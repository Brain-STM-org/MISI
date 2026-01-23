# O11y: Understanding What Your Code Is Doing

> *"You can't fix what you can't see."*

## Why "O11y"?

**Observability** is an 11-letter word. Developers, being efficient (lazy), shortened it to **o11y** — the first letter, the count of middle letters (11), and the last letter.

Same pattern: internationalization → i18n, localization → l10n, Kubernetes → k8s.

Now you're in on the joke.

## Learning Objectives

By the end of this module, you will be able to:

1. **Explain** what observability means and why it matters
2. **Distinguish** between logs, metrics, and traces
3. **Write** useful log messages in your code
4. **Read** logs to understand what happened
5. **Understand** what dashboards show and why they're valuable
6. **Appreciate** how modern tools make observability accessible

---

## The Problem Observability Solves

Your code runs on a server. Something goes wrong. A user reports: "It's slow" or "I got an error."

Now what?

You can't put a `print()` statement in and re-run. The moment is gone. The user has moved on. You need to understand what happened *after the fact*.

This is what observability enables: **understanding the internal state of a system by examining its outputs.**

The three pillars of observability:

| Pillar | What It Is | Question It Answers |
|--------|------------|---------------------|
| **Logs** | Text records of events | "What happened?" |
| **Metrics** | Numbers over time | "How is it performing?" |
| **Traces** | Request journeys | "Where did time go?" |

---

## Logs: The Story of What Happened

A **log** is a timestamped record of something that occurred.

```
2024-01-15T14:23:45Z INFO  User alex@example.com logged in
2024-01-15T14:23:46Z DEBUG Loading user preferences
2024-01-15T14:23:47Z INFO  Fetching dashboard data
2024-01-15T14:23:52Z WARN  Dashboard query took 5s (threshold: 2s)
2024-01-15T14:23:53Z ERROR Failed to load recommendations: Connection refused
```

Each line tells you:
- **When** it happened (timestamp)
- **Severity** (INFO, WARN, ERROR, DEBUG)
- **What** occurred (the message)

### Log Levels

| Level | When to Use | Example |
|-------|-------------|---------|
| **DEBUG** | Detailed diagnostic info | `"Query parameters: {user_id: 123}"` |
| **INFO** | Normal operations | "User logged in" |
| **WARN** | Potential problems | "Response time exceeding threshold" |
| **ERROR** | Something failed | "Database connection lost" |
| **FATAL** | System can't continue | "Out of memory, shutting down" |

In production, you typically log INFO and above. DEBUG is too verbose for normal operation but invaluable when investigating issues.

### Writing Good Logs

**Bad:**
```python
logger.info("Error")
logger.info("Done")
logger.info("Here")
```

**Good:**
```python
logger.info(f"User {user_id} started checkout with {len(items)} items")
logger.error(f"Payment failed for order {order_id}: {error_message}")
logger.warn(f"API response time {response_time}ms exceeds 1000ms threshold")
```

Good logs include:
- **Context**: What entity? What IDs?
- **Specifics**: What values? What state?
- **Actionable info**: Could someone investigate with this?

### Reading Logs

When debugging:

1. **Find the timeframe**: When did the problem occur?
2. **Filter by severity**: Start with ERRORs and WARNs
3. **Correlate IDs**: Follow a specific request or user
4. **Look for patterns**: Did this happen before? How often?

```bash
# Example: Finding errors in the last hour
grep "ERROR" app.log | grep "2024-01-15T14"

# Example: Following one user's journey
grep "user_id=12345" app.log
```

---

## Metrics: Numbers Over Time

**Metrics** are numerical measurements collected at regular intervals.

```
requests_total: 1,523,456
requests_per_second: 250
response_time_p95: 180ms
error_rate: 0.02%
cpu_usage: 45%
memory_usage: 2.3GB
```

Unlike logs (which record discrete events), metrics track continuous state.

### Common Metrics

| Metric | What It Measures | Why It Matters |
|--------|------------------|----------------|
| Request rate | Requests per second | Traffic patterns, capacity |
| Error rate | % of failed requests | System health |
| Response time (p50/p95/p99) | Latency percentiles | User experience |
| CPU/Memory usage | Resource consumption | Capacity planning |
| Queue depth | Pending work | Backlog, overload |

### Why Percentiles Matter

"Average response time: 100ms" sounds good.

But averages hide problems:
- 95% of requests: 50ms (great!)
- 5% of requests: 2000ms (terrible!)

Average: ~150ms. But 5% of your users are suffering.

That's why we track **percentiles**:
- **p50**: Half of requests are faster than this (median)
- **p95**: 95% are faster; 5% are slower
- **p99**: 99% are faster; 1% are slower

p95 and p99 reveal the experience of your unhappiest users.

---

## Dashboards: Making Sense of It All

Raw logs and metrics are overwhelming. **Dashboards** visualize them.

```
┌─────────────────────────────────────────────────────────────┐
│                    Application Dashboard                     │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Requests/sec          Error Rate           Response Time   │
│  ┌──────────────┐     ┌──────────────┐     ┌──────────────┐│
│  │    ╱╲        │     │              │     │      ──      ││
│  │   ╱  ╲  ╱╲   │     │  ──────────  │     │   ╱╲   ╲     ││
│  │  ╱    ╲╱  ╲  │     │   0.1%       │     │  ╱  ╲   ╲    ││
│  │ ╱          ╲ │     │              │     │ ╱    ╲───╲   ││
│  └──────────────┘     └──────────────┘     └──────────────┘│
│     250 req/s              ✓ OK               p95: 180ms   │
│                                                              │
│  CPU Usage              Memory               Active Users   │
│  ┌──────────────┐     ┌──────────────┐     ┌──────────────┐│
│  │ █████░░░░░   │     │ ██████░░░░   │     │              ││
│  │    45%       │     │   2.3/4 GB   │     │    1,247     ││
│  └──────────────┘     └──────────────┘     └──────────────┘│
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

At a glance, you can see:
- Is traffic normal?
- Are errors spiking?
- Is response time degrading?
- Are we running out of resources?

### Grafana: The Industry Standard

**Grafana** is the most popular open-source dashboarding tool. You'll likely encounter it.

Grafana connects to various data sources (Prometheus for metrics, Loki for logs, etc.) and lets you build visualizations.

The good news: **AI assistants can generate Grafana dashboards for you.** Describe what you want to see, and modern AI can produce dashboard configurations that would have taken hours to build manually.

```
You: "Create a Grafana dashboard showing request rate, error rate,
      and p95 response time for my API, with alerts if error rate
      exceeds 1%."

AI: Here's the dashboard JSON configuration...
```

This is one of those areas where LLMs genuinely accelerate work that used to be tedious.

---

## Putting It Together: A Debugging Story

**The problem:** Users report the app is "slow sometimes."

**Step 1: Check the dashboard**
```
Response time p95: 180ms normally, spiking to 3000ms at 2pm daily
```

Aha — it's not random. Something happens at 2pm.

**Step 2: Correlate with other metrics**
```
CPU at 2pm: 95% (normal: 45%)
Database connections at 2pm: maxed out
```

The database is overwhelmed at 2pm.

**Step 3: Check the logs at 2pm**
```
14:00:01 INFO Starting daily report generation
14:00:02 INFO Report query: SELECT * FROM orders WHERE...
14:00:03 WARN Query taking longer than expected
14:01:45 INFO Report generation complete (103 seconds)
```

Found it: a daily report runs at 2pm and hammers the database.

**Step 4: Fix it**
- Run the report at 3am when no one's using the app, OR
- Optimize the report query, OR
- Use a read replica for reports

Without observability, you'd be guessing. With it, you followed the evidence.

---

## Getting Started with Observability

### For Simple Projects: Logging is Enough

Start with good logging:

```python
import logging

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s %(levelname)s %(message)s'
)
logger = logging.getLogger(__name__)

def process_order(order):
    logger.info(f"Processing order {order.id} for user {order.user_id}")
    try:
        result = charge_payment(order)
        logger.info(f"Order {order.id} payment successful")
        return result
    except PaymentError as e:
        logger.error(f"Order {order.id} payment failed: {e}")
        raise
```

When something goes wrong, you can trace what happened.

### For Web Services: Add Metrics

Once you're running a web service, add basic metrics:
- Request count
- Error count
- Response times

Many web frameworks have middleware that adds this automatically.

### For Production: Dashboards

When your project is deployed and has real users:
- Set up Grafana (or a managed alternative like Datadog, New Relic)
- Create dashboards for key metrics
- Add alerts for critical thresholds

Your mentors can help with this setup. AI assistants can generate configurations.

---

## Exercise: Add Logging

### Exercise 1: Read Some Logs

Find a project with logs (your own, or an open-source project's example logs).

Answer:
- What log levels are used?
- Can you follow what happened?
- What information would help that's missing?

### Exercise 2: Add Logging to Code

Take a function you've written (or an AI has generated).

Add logging for:
- When the function starts (INFO)
- Key decision points (DEBUG)
- Any warnings or errors (WARN/ERROR)
- When it completes successfully (INFO)

### Exercise 3: Explore a Dashboard

Many open-source projects have public dashboards. Search for "Grafana public dashboard examples" and explore:
- What metrics are shown?
- How is the layout organized?
- Can you understand the system's health at a glance?

---

## Key Insights

| Concept | Implication |
|---------|-------------|
| Logs tell the story | Text records of what happened and when |
| Metrics show trends | Numbers over time reveal patterns |
| Dashboards visualize | Graphs make data comprehensible |
| Percentiles reveal suffering | Averages hide outlier pain |
| AI accelerates setup | Dashboard configs that took hours now take minutes |

---

## Reflection Questions

1. You see this log: `ERROR: Something went wrong`. How useful is it? What would make it better?

2. Average response time is 100ms but users complain about slowness. What metric should you check?

3. Why might you want different log levels for development vs. production?

---

*Next module: Iterative Design — why shipping early beats shipping perfect.*
