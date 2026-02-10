# Hash Tables (Dictionaries)

Hash Tables are one of the most important things especially for IAM, caching, JWT, RBAC, and performance issues.

## Why Hash Tables exist?
> A hash table is a collection of key → value pairs where the key tells you exactly where to look.

Hash tables exist so we can find things fast without searching everything.

Instead of:
- Checking one by one
- Looping through lists

We can jump directly to what we want.

### What hash means

A hash is just a function that turns a key into a number (an address).

Example:
- "user123" → 42
- "role_admin" → 17

That number tells the system: `where to store or find the value`

### Why Hash Tables are fast
- No looping
- No scanning
- Direct access

This is why lookup time is:
- `Usually O(1) (constant time)`

Which means:
- 10 users or 10 million users → lookup feels the same

### Collisions happen

Two different keys can:
- Produce the same hash
- Point to the same locker

When this happens:
- The system stores multiple items together
- Lookup slows down

Bad hash tables behave like lists

### Example 1: JWT Claims

JWT claims are often stored in a dictionary:

- ClaimName → Value

Why this matters:
- Fast authorization checks
- But:
    - Too many claims = bigger token
    - Bigger token = more memory + network cost

### Example 2: IAM & RBAC

Permissions are stored as:
- Role → Permissions list

Hash tables help:
- Quickly answer “Is this user allowed?”
- But:
    - Overloaded permission maps = memory pressure

### Example 3: Caching (Redis / In-memory)

Caches are basically:
- Big distributed hash tables
- Key → Cached result
- But concern is
    - Cache size
    - Eviction strategy
    - Memory limits

### Memory trade-off

Hash tables use:
- Extra memory
- Empty slots
- Internal structures

They trade:
`More memory → faster access`

### Common production mistakes

- Using huge objects as keys
- Letting cache grow without eviction
- Assuming lookup is always fast
- Storing unbounded user/session data
- Forgetting hash tables live in memory

## Mental Picture

**Hash tables are fast because they avoid searching, but they cost memory and break down when they grow without limits.**

Instead of checking every record, the system uses an index to jump straight to the answer. That’s fast, but it needs extra memory, and if we don’t limit it, the system slows down.

**Hash Table = locker system**
- Each locker has a number
- You know the locker number
- You go straight to it
- No searching

**List = pile of bags**
- You check each bag
- Slow as the pile grows

