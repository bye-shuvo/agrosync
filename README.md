# Project Documentation: AgroSync

## 1. Abstract
AgroSync is an innovative, localized web application designed to bridge the gap between advanced agricultural technology and smallholder farmers in Bangladesh. By leveraging modern machine learning and accessible web interfaces, the platform addresses critical challenges in crop health management and resource optimization. The core of AgroSync consists of a deep-learning-based Convolutional Neural Network (CNN) tailored for the immediate identification of rice leaf diseases, coupled with a dynamic, context-aware agricultural assistant and a high-precision seed requirement calculation API. Operating entirely under a tailored context that emphasizes low-overhead, fast interaction, and high usability, AgroSync provides farmers, agronomists, and agricultural extension workers with instant diagnostics and actionable recommendations. The project demonstrates how localized, field-specific digital interventions can optimize inputs, reduce crop losses, and contribute significantly to sustainable food security.

---

## 2. Project Overview

### 2.1 Project Identity
*   **Project Name:** AgroSync
*   **Production Deployment:** [agrosyncbd.vercel.app](https://agrosyncbd.vercel.app)
*   **Source Code Repository:** [github.com/bye-shuvo/Agrosync](https://github.com/bye-shuvo/Agrosync)

### 2.2 Core Objectives
AgroSync was built to democratize precision agriculture. In many developing regions, traditional methods of diagnosing crop diseases rely heavily on visual inspections by overextended field officers, leading to delayed interventions and massive yield losses. AgroSync counters this by providing:
1.  **Instantaneous Diagnosis:** Real-time analysis of leaf tissue via user-submitted imagery.
2.  **Resource Efficiency:** Precise computation of input requirements to minimize waste and reduce overhead costs for small-scale farmers.
3.  **Accessible Extension Support:** An intelligent, context-restricted conversational interface acting as a first-line agricultural consultant.

---

## 3. Core Architectural Modules

The application is built using a modern 3-tier architecture, combining high-performance web frontends with specialized backend processing nodes.

```
   [ User Interface: React / Tailwind CSS ]
                      │
                      ▼
   [ Application Layer: Node.js / Express ]
                      │
         ┌────────────┴────────────┐
         ▼                         ▼
  [ Image Model ]           [ Intelligent Chatbot ]
  (Rice Disease Tagging)      (Agricultural Context)
```

### 3.1 Rice Leaf Disease Detection
The premier feature of AgroSync is its computer vision module. The system handles image uploads directly from mobile devices or webcams, executing standard preprocessing layers before passing the matrices to an inference engine.
*   **Input Validation:** The model verifies if the structural characteristics of the image match a rice leaf (`is_rice_leaf`). Non-agricultural or invalid uploads are filtered automatically with explicit corrective guidance.
*   **Classification & Quantification:** Valid leaves are classified into health states (`Healthy` or `Diseased`). For infected specimens, the specific disease is isolated, and an algorithmic estimation calculates the overall affected surface area percentage (`diseased_area_percentage`).
*   **Output Structure:** All analysis is bound tightly to a strict JSON structure, enforcing predictability for frontend rendering layers.

### 3.2 The AgroSync Conversational Assistant
To provide interactive utility, AgroSync incorporates a highly disciplined conversational agent configured with tight system constraints:
*   **Strict Knowledge Boundary:** The assistant is restricted to agricultural workflows, crop care, farming practices, and explicit platform guidance. Out-of-bounds queries are rejected uniformly to protect computational bandwidth.
*   **Platform Tool Integration:** The chatbot operates as an interactive funnel. Whenever a user inquires about plant vulnerabilities, it provides brief agricultural guidance and directs them to the *Crop Disease Detector*. If field sizing or density metrics are discussed, it redirects users seamlessly to the *Seed Calculator*.

### 3.3 Personalized Seed Calculator API
A math-heavy utility module that allows users to optimize their resource deployment. By supplying structural metrics—such as total cultivation area, regional spacing variations, and targeted crop types—the system computes optimized seed counts, mitigating the risks of over-purchasing or under-sowing.

---

## 4. Technology Stack

*   **Frontend Ecosystem:** React.js, Vite (for optimized hot module replacement and client-side bundling), Tailwind CSS (for mobile-responsive layouts tailored for field environments).
*   **Backend Application Server:** Node.js, Express.js.
*   **Database Management System:** MySQL (configured for optimized relational indexing of user profiles, session tokens, and aggregate agricultural logging).
*   **AI Inference Layer:** Integrated client-side REST patterns for high-throughput image matrices and text extraction tokens.
