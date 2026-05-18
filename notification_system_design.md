# Notification System Design

## 1. Database Optimization

To improve query performance, I would add a composite index on:

```sql
(userId, isRead, createdAt DESC)
```

This helps because:

* notifications are mostly searched user-wise
* unread notifications are frequently accessed
* latest notifications are shown first

---

## 2. Pagination

Pagination should be used to avoid loading all notifications at once.

Example:

* limit = 20
* offset = 0

Benefits:

* faster response
* reduced database load
* better frontend performance

---

## 3. Caching

Frequently accessed notifications can be cached using Redis.

Benefits:

* reduced DB queries
* faster API response
* better scalability

---

## 4. Real Time Notifications

WebSockets can be used for real-time updates.

Benefits:

* instant notification delivery
* better user experience

---

## 5. Retry Mechanism

Failed notifications should be retried using queue workers.

Tools:

* BullMQ
* RabbitMQ

Benefits:

* reliability
* fault tolerance

---

## 6. Priority Queue

High priority notifications should be processed first.

Data structure:

* Min Heap / Priority Queue

This improves delivery of urgent notifications.
