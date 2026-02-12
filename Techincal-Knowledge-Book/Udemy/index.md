# 1. Udemy: Apache Kafka

### Helps to:

1. Design and implement real-time streaming systems.
2. Build event-driven architectures.
3. Process high-throughput data streams.
4. Integrate distributed systems using messaging.
5. Develop Kafka Producers and Consumers in Java.
6. Implement reliable and fault-tolerant messaging systems.
7. Handle exactly-once message processing.
8. Work on big data and streaming pipelines.
9. Support IoT and real-time analytics systems.

### Concepts Learnt:

1. Kafka Ecosystem Overview
    - Apache Kafka architecture.
    - Kafka brokers and clusters.
    - ZooKeeper / KRaft (conceptual understanding).
    - Confluent Community Kafka.
    - Kafka ecosystem components.

2. Kafka Core Concepts
    - Topics.
    - Partitions.
    - Offsets.
    - Producers.
    - Consumers.
    - Consumer Groups.
    - Brokers.
    - Replication.
    - Leaders and Followers.

3. Kafka Cluster Architecture
    - Multi-node Kafka cluster setup.
    - Broker coordination.
    - Partition distribution.
    - Fault tolerance.
    - High availability.
    - Data replication strategies.

4. Kafka Storage Architecture
    - Log-based storage system.
    - Immutable commit log.
    - Segment files.
    - Retention policies.
    - Log compaction.
    - Offset management.

5. Kafka Producer API (Java)
    - Creating Kafka producers.
    - Sending synchronous messages.
    - Sending asynchronous messages.
    - Configuring acknowledgments.
    - Configuring retries.
    - Handling delivery callbacks.

6. Kafka Consumer API
    - Creating Kafka consumers.
    - Polling messages.
    - Managing offsets.
    - Manual vs auto offset commit.
    - Consumer group rebalancing.
    - Handling message processing failures.

7. Idempotence and Transactions
- Idempotent producers.
- Preventing duplicate messages.
- Transactional messaging.
- Exactly-once semantics (EOS).

8. Serialization
    - JSON serialization.
    - AVRO serialization.
    - Schema evolution (conceptual).
    - Schema Registry (basic awareness).

9. Exactly Once Processing
    - At-least-once delivery.
    - At-most-once delivery.
    - Exactly-once delivery.
    - Transactional producer + consumer workflow.

### After Completion what you should know or are expected to answer:
- Design a Kafka cluster architecture.
- Write Kafka Producer and Consumer programs.
- Configure high availability and fault tolerance.
- Implement reliable message delivery.
- Build scalable event-driven systems.

# 2. Udemy: PowerShell

### Helps to:
- Automate administrative tasks.
- Manage Windows systems using command-line scripting.
- Manage servers, services, and processes efficiently.
- Perform bulk operations on multiple systems.
- Remotely manage clients and servers.
- Query system and hardware information.
- Improve efficiency in IT administration.
- Reduce manual configuration errors.
- Support Azure and Windows Server administration.

### Concepts Learnt:
1. PowerShell Fundamentals
2. Command Structure
    - Cmdlets.
    - Parameters.
    - Aliases.
    - Operators (eq, ne, like, etc.).
    - Variables.
    - Execution policies.
    - Object-based output (not text-based).
3. Pipeline
    - Filtering and sorting data.
    - Combining multiple commands.
    - Working with object properties.
4. Working with Data Structures
    - Arrays.
    - Hash tables.
    - Object members.
    - Custom objects.
5. Managing System Components
    - Managing processes.
    - Managing services.
    - Managing local accounts.
    - Managing printer settings.
    - Querying hardware details.
    - Working with WMI (Windows Management Instrumentation).
    - Working with CIM commands.

6. Scripting
    - ForEach loops.
    - If / ElseIf statements.
    - Functions.
    - Script parameters.
    - Script automation.
    - Creating reusable commands.

7. Security
    - Execution policy levels.
    - Restricting script execution.
    - Secure remote sessions.
    - Managing permissions.

8. Remoting
    - PowerShell remoting.
    - Managing remote computers.
    - Running commands on multiple systems.
    - Automating server management remotely.

9. Logging and Monitoring
    - Creating transcripts.
    - Recording session activity.
    - Debugging scripts.

### After Completion what you should know or are expected to answer:
- Perform bulk administrative operations.
- Manage Windows servers using CLI.
- Troubleshoot systems using PowerShell.
- Use remoting to manage distributed systems.
- Query hardware and system configuration programmatically.


# 3. Udemy: OpenID Connect and JWT

### Helps to:
- Implement secure authentication for web and mobile applications.
- Build social login systems (Login with Google, Facebook, LinkedIn, etc.).
- Improve user signup conversion rates.
- Secure APIs using OAuth 2.0 and OpenID Connect.
- Validate user identity using cryptographic tokens.
- Choose the correct authentication flow for different application types.
- Protect backend services with proper token validation.
- Strengthen API security architecture.
- Work confidently with identity providers (IdPs).

### Concepts Learnt:

1. Identity and Authentication Fundamentals
    - Difference between authentication and authorization.
    - Role of Identity Providers (IdP).
    - Role of clients and resource servers.
    - Secure identity federation.
2. OpenID Connect (OIDC) Basics
    - What is OpenID Connect.
    - How OIDC builds on OAuth 2.0.
    - Actors involved (Client, Authorization Server, Resource Owner).
    - OIDC endpoints (authorization, token, userinfo).
    - Identity claims.
3. OpenID Connect Flows
    - Understanding and selecting the correct flow:
    - Authorization Code Flow.
    - Authorization Code Flow with PKCE (Proof Key for Code Exchange).
    - Implicit Flow (conceptual).
    - Hybrid Flow (conceptual).
    - Understanding:
    - When to use each flow.
    - Security trade-offs.
    - Mobile vs Web vs Backend scenarios.
4. OAuth 2.0 Concepts
    - Access tokens.
    - Refresh tokens.
    - Authorization codes.
    - Scope.
    - Consent.
    - Protected resources.
5. JSON Web Tokens (JWT)
    - JWT structure (Header, Payload, Signature).
    - Claims (standard and custom).
    - How JWT is encoded.
    - How JWT is signed (JWS).
    - How JWT is encrypted (JWE).
    - Reading and decoding JWT.
    - Token expiration and validation.
6. Token Types in OIDC
    - ID Token.
    - Access Token.
    - Refresh Token.
    - Authorization Code.
    - JWS vs JWE.
    - Token validation process.

7. Cryptographic Validation
    - Digital signatures.
    - Public/private key validation.
    - Token verification.
    - Preventing token tampering.

8. API Security Implementation
    - Protecting APIs with access tokens.
    - Validating tokens on backend servers.
    - Secure redirect handling.
    - Managing session security.
    - Handling token expiration.

9. PKCE (Proof Key for Code Exchange)
    - Why PKCE is needed.
    - Preventing authorization code interception.
    - Secure mobile app authentication.

### After Completion what you should know or are expected to answer:
- Design secure login systems.
- Integrate social login into applications.
- Validate and verify tokens securely.
- Implement proper API security.
- Choose correct authentication flow for web, mobile, and backend apps.
- Explain token-based authentication architecture clearly.

# 4. Udemy: Keycloak

### Helps to:
- Implement centralized authentication and authorization systems.
- Customize and extend Keycloak for enterprise applications.
- Integrate Keycloak into complex backend architectures.
- Implement Single Sign-On (SSO).
- Customize authentication flows.
- Develop custom Keycloak extensions using Java.
- Override default Keycloak functionalities.
- Implement secure identity management for microservices and cloud systems.
- Adapt Keycloak to fit mature, production-level systems.

### Concepts Learnt:
1. Keycloak Architecture
    - Keycloak core components.
    - Realms.
    - Clients.
    - Users and roles.
    - Identity providers.
    - Authentication flows.
    - Authorization services.
    - Admin console and configuration model.
2. Centralized Authentication & Authorization
    - Single Sign-On (SSO).
    - Identity federation.
    - OAuth 2.0 and OpenID Connect integration.
    - Role-based access control (RBAC).
    - Token-based security model.
3. Writing Keycloak Extensions
    - Service Provider Interfaces (SPI).
    - Custom providers.
    - Implementing custom logic in Java.
    - Packaging and deploying extensions.
    - Extending authentication mechanisms.
4. Overriding Keycloak Functionalities
    - Custom authentication flow executions.
    - Custom required actions.
    - Extending user storage.
    - Custom event listeners.
    - Custom protocol mappers.
5. Authentication Flow Customization
    - Modifying built-in flows.
    - Creating custom authentication flows.
    - Multi-factor authentication extensions.
    - Adding additional validation steps.
    - Controlling login process behavior.
6. Custom Required Actions
    - Forcing password update.
    - Email verification.
    - Custom business validation.
    - Post-login actions.
7. Theme Customization
    - Custom login pages.
    - Custom account management pages.
    - Branding Keycloak UI.
    - Modifying templates and styles.
8. Integration in Real-World Systems
    - Integrating Keycloak with backend services.
    - Integrating with microservices.
    - Handling tokens in distributed systems.
    - Managing session behavior.
    - Deployment considerations in enterprise systems.

### After Completion what you should know or are expected to answer:
- OpenID Connect & JWT knowledge.
- Azure Entra ID understanding.
- API Security architecture.
- Microservices security.
- Cloud-native authentication systems.
- IoT secure identity management.

# 5. Udemy: Markdown

### Helps to:
- Write clean and structured documentation.
- Create professional README files for projects.
- Write technical documentation for APIs and systems.
- Prepare notes, outlines, and structured content.
- Publish content to HTML or PDF.
- Maintain documentation in cloud-based workflows.
- Improve clarity in technical communication.
- Create portable, plain-text documentation.

### Concepts Learnt:

1. Markdown Fundamentals
2. Practical Usage
    - Writing README files.
    - Writing API documentation.
    - Writing blog posts.
    - Writing structured technical notes.
    - Writing project documentation.
    - Creating structured outlines.
3. Export and Publishing
    - Converting Markdown to HTML.
    - Converting Markdown to PDF.
    - Using Markdown in static site generators.
    - Publishing to web platforms.
4. Markdown in Workflows
    - Using Markdown with Git.
    - Using Markdown in GitHub repositories.
    - Cloud-based Markdown editors.
    - Mobile Markdown workflows.
    - Documentation version control.

### After Completion what you should know or are expected to answer:
- Write clean and professional README files.
- Document software projects clearly.
- Create structured technical documentation.
- Maintain documentation in version-controlled environments.
- Use Markdown in collaborative development environments.