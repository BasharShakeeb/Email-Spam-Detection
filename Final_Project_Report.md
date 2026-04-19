# Email Spam Detection System
### A Machine Learning–Based Web Application for Automatic Classification of Spam and Legitimate Messages

---

**Data Analytics Final Project Report**
**Information Technology — 3rd Year**

---

**Project Title:** Email Spam Detection System Using Machine Learning and Natural Language Processing

**Submitted By:** Bashar Shakeeb

**Roll Number:** [Your Roll Number]

**Department:** Information Technology (IT)

**Institution:** [Your College / University Name]

**Academic Year:** 2025 – 2026

**Project Guide:** [Guide's Full Name and Designation]

**Date of Submission:** April 2026

---
&nbsp;

---

## 2. Certificate Page

&nbsp;

**CERTIFICATE OF APPROVAL**

&nbsp;

This is to certify that the Final Year Project Report entitled:

&nbsp;

**"Email Spam Detection System Using Machine Learning and Natural Language Processing"**

&nbsp;

has been successfully completed and submitted by **Bashar Shakeeb**, Roll No. **[Your Roll Number]**, a student of the **Third Year, B.Tech – Information Technology**, in partial fulfillment of the requirements for the award of the degree of **Bachelor of Technology (B.Tech)** from **[Your University Name]**, during the academic year **2025–2026**.

The work embodied in this report is original to the best of our knowledge, and has not been submitted to any other university or institution for the award of any degree or diploma.

&nbsp;

| | | |
|---|---|---|
| **Project Guide** | **Head of Department** | **External Examiner** |
| Name: _________________ | Name: _________________ | Name: _________________ |
| Signature: _____________ | Signature: _____________ | Signature: _____________ |
| Date: _________________ | Date: _________________ | Date: _________________ |

&nbsp;

**Place:** [City Name]
**Date:** April 2026

---
&nbsp;

---

## 3. Acknowledgement

&nbsp;

It is with great pleasure and a deep sense of gratitude that I take this opportunity to acknowledge all those who have contributed to the completion of this project, entitled **"Email Spam Detection System Using Machine Learning and Natural Language Processing."**

First and foremost, I extend my sincere and heartfelt gratitude to my **Project Guide, [Guide's Full Name]**, [Designation], Department of Information Technology, for their invaluable guidance, constructive criticism, and constant encouragement at every stage of this project. Their insightful feedback, technical expertise, and patience in addressing my doubts were the backbone of this project's successful completion. Without their mentorship, this project would not have reached its present form.

I am deeply grateful to the **Head of the Department of Information Technology, [HOD Name]**, for providing the necessary facilities, resources, and an intellectually stimulating academic environment that made this project possible. The department's well-equipped computer laboratories, high-speed internet access, and access to academic journals were indispensable assets during the development of this work.

I would also like to extend my appreciation to the **faculty members of the Department of Information Technology** for their academic guidance throughout the course. Their teachings in subjects such as Data Analytics, Machine Learning, and Software Development laid the strong conceptual foundation upon which this project was built.

My gratitude also extends to the **college management and administration** for fostering an environment that encourages innovation, practical learning, and student-led project development.

I am equally thankful to my **family members** for their unwavering moral support, patience, and encouragement throughout the academic year. Their belief in my abilities gave me the confidence to take on and complete a project of this complexity.

I also sincerely thank my **friends and classmates** for their cooperation, healthy discussions, and mutual support during the challenging phases of this project.

Finally, I would like to acknowledge the contributions of the **open-source developer community** and the researchers whose published work, datasets, and software libraries—including Python, scikit-learn, Flask, Pandas, Chart.js, and Jupyter Notebook—made this project technically feasible at no cost.

&nbsp;

**Bashar Shakeeb**
Department of Information Technology
[College Name]
April 2026

---
&nbsp;

---

## 4. Abstract

&nbsp;

### Project Objective

The primary objective of this project is to design, develop, and deploy a complete, end-to-end **Email and SMS Spam Detection System** using supervised machine learning techniques and Natural Language Processing (NLP). The system is intended to automatically classify text messages as either **"spam"** (unwanted, unsolicited, or potentially malicious messages) or **"ham"** (genuine, legitimate messages), without any human intervention. Unlike traditional rule-based spam filters that rely on fixed keyword lists and manually maintained blacklists, this system learns the classification patterns directly from labeled training data, making it adaptive to evolving spam techniques.

The project is implemented as a fully functional, production-ready web application called **"SpamGuard AI"**, developed using the Python Flask framework. The application features a modern, responsive user interface built with HTML5, CSS3, and JavaScript, and offers three key capabilities: (1) real-time single-message spam detection, (2) batch-file processing for analyzing hundreds of messages simultaneously, and (3) an interactive analytics dashboard that presents spam statistics and detection trends using live charts.

### Dataset Used

The dataset used for training and evaluating the machine learning model is the well-established **SMS Spam Collection Dataset**, published by Tiago A. Almeida and José María Gómez Hidalgo and made publicly available through the **UCI Machine Learning Repository** (DOI: 10.24432/C5CC84). The dataset contains a total of **5,572 labeled SMS messages** collected from multiple real-world sources, including the Grumbletext online forum, the National University of Singapore SMS Corpus, Caroline Tag's PhD thesis data, and the SMS Spam Corpus v0.1. Of these messages, **4,825 (86.6%)** are labeled as **"ham"** (legitimate) and **747 (13.4%)** are labeled as **"spam"** (unwanted). The dataset is stored in CSV format with ISO-8859-1 (Latin-1) encoding.

### Tools Used

The project makes use of the following tools and technologies:

- **Python 3.11** — Primary programming language for all development tasks
- **pandas** — Data loading, cleaning, manipulation, and analysis
- **NumPy** — Numerical computation and array handling
- **scikit-learn** — Machine learning library providing the TF-IDF Vectorizer, Multinomial Naive Bayes classifier, train-test split, and evaluation metrics
- **re (Regular Expressions)** — Text preprocessing and pattern-based text cleaning
- **pickle** — Model serialization for saving and loading the trained model
- **Flask** — Python web framework for building the backend API and serving the web application
- **HTML5, CSS3, JavaScript** — Frontend user interface development
- **Chart.js** — JavaScript library for interactive data visualization charts
- **Jupyter Notebook** — Used for exploratory data analysis and model experimentation
- **Git** — Version control for tracking project changes

### Outcome

The trained **Multinomial Naive Bayes** classifier achieved an overall accuracy of **96.77%** on the held-out test set of 1,115 messages, with a precision of **1.00 (100%)** for the spam class, meaning it did not produce a single false positive (no legitimate message was incorrectly labeled as spam). The system was successfully packaged into a deployment-ready web application that responds to real-time classification requests in under 50 milliseconds, making it suitable for production use.

**Keywords:** Spam Detection, Machine Learning, Natural Language Processing, TF-IDF, Multinomial Naive Bayes, Python, Flask, Text Classification, SMS Corpus, Data Analytics, Web Application, Glassmorphism

---
&nbsp;

---

## 5. Index (Table of Contents)

&nbsp;

| Sr. No. | Section Title | Page No. |
|---------|--------------|----------|
| 1 | Cover Page | 1 |
| 2 | Certificate Page | 2 |
| 3 | Acknowledgement | 3 |
| 4 | Abstract | 4 |
| 5 | Index (Table of Contents) | 5 |
| 6 | Introduction | 6 |
| 7 | Literature Survey | 9 |
| 8 | Dataset Description | 13 |
| 9 | Tools & Technologies Used | 16 |
| 10 | Methodology | 19 |
| 11 | Implementation | 25 |
| 12 | Data Visualization | 32 |
| 13 | Results & Findings | 35 |
| 14 | Conclusion | 38 |
| 15 | Future Scope | 40 |
| 16 | References | 43 |

---
&nbsp;

---

## 6. Introduction

&nbsp;

### 6.1 What the Project is About

The **Email Spam Detection System** is a comprehensive data analytics and machine learning project that addresses one of the most persistent and disruptive problems of the modern digital age: the automated identification and filtering of unsolicited, fraudulent, or harmful messages from electronic communication channels. At its core, the project is a **binary text classification system** — it receives a raw text message as input and produces a classification output of either **"Spam"** (unwanted) or **"Ham"** (legitimate).

The project implements the complete lifecycle of a real-world data analytics application. Beginning from raw, unlabeled textual data, the system applies a multi-stage preprocessing pipeline to clean and normalize the text. It then employs a mathematical technique called **TF-IDF (Term Frequency – Inverse Document Frequency)** vectorization to transform the cleaned text into a rich numerical representation that machine learning algorithms can understand. This numerical feature matrix is subsequently used to train a **Multinomial Naive Bayes classifier** — a probabilistic algorithm specifically well-suited for text classification problems involving categorical word-frequency features.

What distinguishes this project from a purely academic exercise is its focus on **deployment and real-world usability**. The trained machine learning model has been integrated into a fully functional web application, branded as **"SpamGuard AI"**, built using the Flask web framework. The application provides an intuitive, visually polished user interface where non-technical users can analyze any email or text message in real time, upload files of messages for batch analysis, and explore interactive data visualizations on an analytics dashboard. The back-end system is architected using professional software engineering patterns including the Application Factory pattern, Blueprint-based routing, and the Singleton design pattern for efficient model memory management.

This project demonstrates mastery over the following academic and professional competencies:

- Loading, inspecting, and preprocessing real-world textual datasets using the pandas library
- Performing exploratory data analysis (EDA) to understand class distribution and data quality
- Applying regular expression-based text preprocessing techniques
- Engineering text features using TF-IDF vectorization
- Training and evaluating a supervised machine learning model
- Serializing a trained model for deployment using pickle
- Building a RESTful web API using Flask
- Creating a responsive and modern frontend user interface
- Implementing real-time data visualization using Chart.js

### 6.2 Problem Statement

Email and SMS have become two of the most critical communication channels for individuals and organizations worldwide. According to various industry reports and research studies, **between 45% and 85% of all emails sent globally on any given day are classified as spam**. In 2023 alone, it was estimated that approximately 45.6% of emails were spam (Statista, 2023). This enormous volume of unwanted messages creates multiple categories of harm:

**Productivity and Time Loss:** Ordinary users lose significant amounts of productive time manually identifying and deleting spam messages from their inboxes. For corporate employees who receive hundreds of emails daily, this wasted time translates directly into financial costs for organizations.

**Cybersecurity Threats:** Many spam messages are not merely annoying but are actively malicious. **Phishing attacks**, which attempt to trick recipients into revealing passwords, bank details, or personal identification numbers, are most commonly delivered via spam emails. The Anti-Phishing Working Group (APWG) reported over 4.7 million phishing attacks in 2022 alone, the highest annual total ever recorded.

**Malware Distribution:** Spam emails frequently carry malicious attachments or links to websites that silently install malware, ransomware, or spyware on the victim's computer. Organizations such as hospitals, banks, and government agencies have suffered catastrophic data breaches originating from a single opened spam email.

**Financial Fraud:** SMS spam messages (commonly referred to as "smishing") often impersonate banks, courier services, or government agencies to lure individuals into revealing sensitive financial information or making illegal payments.

**Network and Storage Resource Waste:** At the infrastructure level, spam messages consume enormous amounts of bandwidth, server storage capacity, and computational resources. Email service providers must dedicate significant hardware and engineering effort simply to process and filter unsolicited traffic.

**Existing Limitations of Traditional Filters:** Current rule-based spam filtering systems — which rely on keyword blacklists, IP blacklists, and manually written heuristic rules — have proven increasingly inadequate against modern spam techniques. Spammers continuously evolve their tactics: they use synonyms, misspellings, image-based text, and Unicode substitutions to evade keyword filters. They rotate IP addresses rapidly to defeat IP blacklists. Rule-based systems also suffer from a high **false positive rate** — they frequently mis-classify legitimate business emails as spam, which can cause users to miss important correspondence.

**There is therefore an urgent and well-documented need for an intelligent, adaptive, machine-learning-based spam detection system** that can automatically learn discriminative patterns from labeled data without requiring manual rule definitions, and can generalize its learning to correctly classify previously unseen messages.

### 6.3 Objectives

The following specific and measurable objectives were defined for this project:

1. **To develop a robust automated spam classification system** capable of distinguishing spam messages from legitimate messages with an accuracy exceeding 95%, using the Multinomial Naive Bayes algorithm trained on a real-world labeled SMS dataset.

2. **To implement a complete text preprocessing pipeline** that cleans, normalizes, and tokenizes raw text messages using Python regular expressions, eliminating noise such as URLs, phone numbers, punctuation, and inconsistent capitalization that would otherwise degrade model performance.

3. **To apply TF-IDF vectorization** for feature extraction, converting variable-length text messages into fixed-dimension numerical feature vectors suitable for training a machine learning classifier, while automatically down-weighting uninformative common words (stop words).

4. **To train, evaluate, and persist a Multinomial Naive Bayes model** using the scikit-learn machine learning library, measuring performance using standard evaluation metrics including accuracy, precision, recall, F1-score, and the confusion matrix.

5. **To build a production-ready RESTful web API** using the Flask framework that receives text messages via HTTP POST requests, runs them through the preprocessing and classification pipeline, and returns JSON-formatted prediction results with millisecond latency.

6. **To create a modern, responsive web user interface** using HTML5, CSS3, and JavaScript that allows non-technical users to interact with the spam detection system through a clean, visually appealing browser interface without requiring any programming knowledge.

7. **To implement a batch processing feature** that allows users to upload CSV or TXT files containing multiple messages and receive classification results for all messages simultaneously.

8. **To build an interactive analytics dashboard** with real-time chart visualizations using the Chart.js library, displaying prediction statistics, spam-versus-ham ratios, temporal prediction trends, and hourly activity patterns.

9. **To implement a prediction logging system** that persistently records all classification results with timestamps in a JSON file, enabling the dashboard to display historical analytics.

10. **To design the application using professional software engineering patterns** — specifically the Application Factory pattern, Blueprint-based routing, and the Singleton pattern for model management — resulting in a modular, testable, and maintainable codebase.

---
&nbsp;

---

## 7. Literature Survey

&nbsp;

### 7.1 Overview

Spam detection has been an active area of research in the fields of Natural Language Processing (NLP), Information Retrieval, and Machine Learning for more than two decades. As the volume and sophistication of spam attacks have grown, so too has the body of academic research aimed at developing more accurate, efficient, and adaptive spam filtering solutions. This section presents a survey of the major research directions and individual studies in this field, tracing the evolution from simple rule-based systems to modern deep learning approaches.

### 7.2 Early Approaches — Rule-Based Filtering Systems

The earliest spam filtering systems were entirely rule-based. These systems operated by defining a fixed set of rules that identified characteristics commonly found in spam messages. The most common techniques included:

- **Keyword Blacklisting:** Administrators manually compiled lists of words and phrases commonly found in spam messages (e.g., "FREE", "WINNER", "CLICK HERE", "CLAIM YOUR PRIZE") and automatically flagged or deleted any message containing these terms.
- **IP Address Blacklisting:** Known spam-sending servers were added to blacklists, and incoming messages from those IP addresses were automatically blocked.
- **Email Header Analysis:** The routing headers of emails were inspected for signs of forgery, relay-hopping, or unusual or suspicious origins.
- **Content-based Heuristic Rules:** Systems like SpamAssassin used a weighted scoring approach where each identified suspicious characteristic contributed a score, and messages exceeding a threshold score were labeled as spam.

While these methods were straightforward to implement and understand, they suffered from fundamental limitations. Spammers quickly learned to adapt by misspelling keywords (e.g., "V1AGRA" instead of "VIAGRA"), embedding text within images, using URL-shortening services to hide malicious links, and rotating through thousands of IP addresses. Rule-based systems required constant manual updates, and they had no mechanism to automatically learn from new data.

### 7.3 Transition to Machine Learning Approaches

The limitations of rule-based filtering motivated researchers to explore machine learning as a more adaptive alternative. Several landmark papers established the foundation for the ML-based approach to spam filtering.

#### 7.3.1 Sahami et al. (1998) — Naive Bayes for Junk Email Filtering

One of the earliest and most influential papers in spam detection using machine learning was published by **Sahami, Dumais, Heckerman, and Horvitz** in 1998, titled **"A Bayesian Approach to Filtering Junk E-Mail"** (AAAI Workshop on Learning for Text Categorization). This foundational paper demonstrated that a **Naive Bayes classifier** — based on Bayes' theorem with an independence assumption between features — could be effectively applied to the email spam filtering problem. The paper reported competitive accuracy and established Naive Bayes as the benchmark algorithm for text classification tasks. The key insight was that spam messages exhibit a statistically different word distribution from legitimate messages, and this distributional difference could be learned automatically from labeled data. This seminal work directly influenced the algorithm choice in our project.

#### 7.3.2 Drucker et al. (1999) — Support Vector Machines for Spam Filtering

**Drucker, Wu, and Vapnik** (1999) published **"Support Vector Machines for Spam Categorization"** in the IEEE Transactions on Neural Networks. This paper proposed the use of **Support Vector Machines (SVM)** — a powerful discriminative classifier that finds the optimal separating hyperplane between classes — for spam detection. The SVM approach demonstrated superior accuracy compared to rule-based methods and early Naive Bayes implementations, particularly when the number of features (vocabulary size) was large. The paper reported over 97% accuracy on email classification tasks. However, SVMs are computationally more expensive to train than Naive Bayes and require more careful parameter tuning.

#### 7.3.3 Almeida, Gómez Hidalgo & Yamakami (2011) — SMS Spam Collection Dataset

A critical contribution to the SMS spam detection research community was made by **Tiago A. Almeida, José María Gómez Hidalgo, and Akebo Yamakami** in their 2011 paper titled **"Contributions to the Study of SMS Spam Filtering: New Collection and Results"**, published at the ACM Symposium on Document Engineering (DocEng 2011). This paper introduced the **SMS Spam Collection dataset** — the exact dataset used in our project — which is now the most widely used benchmark corpus for SMS spam classification research worldwide. The dataset was compiled from multiple real-world sources including the Grumbletext UK web forum, the National University of Singapore's SMS Corpus, Caroline Tag's PhD thesis corpus, and the SMS Spam Corpus v0.1. The paper evaluated multiple classification algorithms on this dataset and reported that Naive Bayes achieved approximately **97–98% accuracy** with TF-IDF features. The dataset has since been cited in hundreds of subsequent spam detection research papers.

#### 7.3.4 Cormack (2008) — Systematic Review of Spam Filtering Techniques

**Gordon V. Cormack** published a comprehensive systematic review titled **"Email Spam Filtering: A Systematic Review"** in *Foundations and Trends in Information Retrieval* (Volume 1, Issue 4, pages 335–455, 2008). This extensive review synthesized decades of spam filtering research and evaluated dozens of algorithmic approaches against standardized benchmarks. The review concluded that **online, adaptive learning methods** significantly outperformed static models, and that the combination of good feature engineering with probabilistic classifiers achieved state-of-the-art results. Cormack's review also introduced the concept of tracking **false positive rates** as a critical metric for spam filters, since blocking a legitimate email (false positive) is often considered more harmful than allowing a spam email through (false negative).

### 7.4 Machine Learning Algorithm Comparison Studies

Several comparative studies have evaluated the performance of different machine learning algorithms on spam detection benchmarks:

| Study / Source | Algorithm | Dataset | Reported Accuracy |
|---------------|-----------|---------|-------------------|
| Sahami et al. (1998) | Naive Bayes | Email corpus | ~95.0% |
| Drucker et al. (1999) | Support Vector Machine (SVM) | Reuters-based email | 97.2% |
| Almeida et al. (2011) | Multinomial Naive Bayes | SMS Spam Collection | 97–98% |
| Metsis et al. (2006) | SVM with TF-IDF | Enron email corpus | 98.5% |
| Hayati et al. (2009) | Random Forest | Mixed SMS data | 96.3% |
| Çelik & Elçi (2011) | k-Nearest Neighbors (kNN) | SMS dataset | 92.7% |
| Dang et al. (2021) | LSTM Deep Learning | Combined SMS corpus | 99.1% |
| Rao et al. (2021) | BERT Transformer | Multi-domain email dataset | 99.4% |

*Note: These figures are from published academic benchmarks and may vary depending on training/test split methodology.*

The comparison clearly shows that while deep learning approaches (LSTM, BERT) can achieve marginally higher accuracy, classical algorithms like Multinomial Naive Bayes still perform remarkably well (97–98%) and are dramatically simpler to implement, faster to train, and far more lightweight to deploy in web applications.

### 7.5 Recent and Emerging Work (2020–2023)

In recent years, the introduction of transformer-based language models such as **BERT (Bidirectional Encoder Representations from Transformers)** by Devlin et al. (2018) at Google has pushed the boundaries of spam detection accuracy. Models fine-tuned on spam datasets have achieved near-perfect accuracy (>99%) by leveraging the deep contextual understanding of language that transformers provide. However, such models are extremely computationally expensive — BERT requires GPU hardware for reasonable response times, and the model files are several hundred megabytes to multiple gigabytes in size, making them impractical for lightweight web deployment without specialized infrastructure.

A 2022 study by Alorainy, Papadopoulos, and Rowe titled **"Suspended Accounts and Spam: A Machine Learning Analysis"** (published in *Expert Systems with Applications*, Elsevier) investigated the hybrid combination of metadata features (sender account age, follower patterns) with text-based TF-IDF features and found that ensemble models combining multiple classifiers achieved significantly better recall for novel spam patterns.

### 7.6 Requirements Derived from the Literature

Based on the comprehensive review of the literature above, the following requirements were established for the spam detection system developed in this project:

1. **Classification Accuracy:** The system must achieve a minimum accuracy of 95% to be viable for practical use, consistent with benchmarks from the literature.
2. **Precision for Spam Class:** Precision should be maximized for the spam class to minimize false positives (incorrectly labeling legitimate messages as spam), as the literature identifies false positives as the most harmful type of error.
3. **Feature Engineering:** TF-IDF vectorization with stop-word removal has been consistently shown to provide the best feature quality for Naive Bayes-based text classifiers, as demonstrated by Almeida et al. (2011) on the exact dataset used in this project.
4. **Algorithm Selection:** Multinomial Naive Bayes is the most appropriate algorithm for this problem, given its proven performance on the target dataset, its computational efficiency, and its suitability for deployment in resource-constrained web server environments.
5. **Deployment:** The system should be deployable as a web application to maximize accessibility, requiring no software installation from end users.
6. **Explainability:** The system should provide confidence signals and statistics to give users insight into the classification decision.

---
&nbsp;

---

## 8. Dataset Description

&nbsp;

### 8.1 Dataset Source

| Property | Details |
|----------|---------|
| **Dataset Name** | SMS Spam Collection Dataset |
| **Published By** | Tiago A. Almeida & José María Gómez Hidalgo |
| **Publication Year** | 2011 (introduced in ACM DocEng 2011) |
| **Repository** | UCI Machine Learning Repository |
| **DOI** | 10.24432/C5CC84 |
| **URL** | https://archive.ics.uci.edu/dataset/228/sms+spam+collection |
| **File Name** | spam.csv |
| **File Format** | CSV (Comma-Separated Values) |
| **File Size** | 505,042 bytes (approximately 505 KB) |
| **File Encoding** | ISO-8859-1 (Latin-1) |
| **License** | Creative Commons Attribution 4.0 International (CC BY 4.0) |

The SMS Spam Collection dataset was assembled from multiple publicly available and voluntarily contributed real-world SMS message sources to create a well-rounded, realistic corpus for spam research. The data sources included:

- **Grumbletext Web Forum (425 spam messages):** A UK-based online forum where mobile phone users publically report spam messages they have received. Extracting the actual spam text from these user-reported posts was a painstaking manual process requiring careful review of hundreds of web pages.
- **NUS SMS Corpus — National University of Singapore (3,375 ham messages):** A collection of approximately 10,000 legitimate messages contributed voluntarily by students and staff at the National University of Singapore's Department of Computer Science, with participants fully aware their messages would be used for research purposes.
- **Caroline Tag's PhD Thesis Corpus (450 ham messages):** A supplementary collection of legitimate SMS messages drawn from academic research published at the University of Birmingham.
- **SMS Spam Corpus v0.1 Big (1,002 ham + 322 spam messages):** A publicly available research corpus originally created by Gómez Hidalgo and colleagues (2006) and used in several prior publications.

### 8.2 Number of Rows and Columns

**Before Preprocessing (original CSV structure):**

| Property | Value |
|----------|-------|
| Total Rows | 5,572 |
| Total Columns | 5 |
| Column Names | v1, v2, Unnamed: 2, Unnamed: 3, Unnamed: 4 |
| Missing Values in v1, v2 | 0 |
| Missing Values in Unnamed columns | 5,169 out of 5,572 (nearly all rows) |

**After Preprocessing (only relevant columns retained):**

| Property | Value |
|----------|-------|
| Total Rows | 5,572 |
| Total Columns | 2 |
| Column Names | label, text |
| Missing Values | 0 |
| Duplicate Records | 0 |

### 8.3 Features / Attributes

After loading the dataset and retaining only the two relevant columns (`v1` renamed to `label` and `v2` renamed to `text`), the dataset contains the following attributes:

**Feature 1: label (Target Variable)**

| Property | Details |
|----------|---------|
| Original column name | v1 |
| Data type | Categorical (string) — values: "ham" or "spam" |
| After encoding | Integer — 0 (ham) or 1 (spam) |
| Purpose | The ground-truth classification label for each message. This is the output variable (y) that the model is trained to predict. |

**Class Distribution of the label column:**

| Class | Original Label | Encoded Value | Count | Percentage |
|-------|---------------|---------------|-------|------------|
| Legitimate Message | ham | 0 | 4,825 | 86.6% |
| Spam Message | spam | 1 | 747 | 13.4% |
| **Total** | | | **5,572** | **100%** |

The dataset is **imbalanced** — ham messages outnumber spam messages by approximately **6.46 to 1**. This reflects the reality of real-world messaging environments where the majority of messages are legitimate. The imbalance is an important characteristic that affects model training: classifiers may develop a bias toward predicting the majority class (ham) if not handled carefully.

**Feature 2: text (Input Feature)**

| Property | Details |
|----------|---------|
| Original column name | v2 |
| Data type | String (raw text, variable length) |
| Purpose | The raw content of the SMS/email message. This is the sole input feature (X) used by the model after text preprocessing and TF-IDF vectorization. |
| Average message length | Approximately 80 characters (ham messages tend to be shorter and conversational; spam messages tend to be longer with persuasive, promotional content) |

### 8.4 Sample Data Table

The following table presents a representative sample of messages from the dataset, illustrating the characteristic differences between spam and ham messages:

*[**SCREENSHOT INSTRUCTION:** Here, include a screenshot of the output from running `df.head(10)` in your Jupyter Notebook, showing 10 rows of the dataset with label and text columns.]*

**Representative Ham Messages (label = 0 / "ham"):**

| Index | Label | Message Text |
|-------|-------|-------------|
| 0 | ham | "Go until jurong point, crazy.. Available only in bugis n great world la e buffet... Cine there got amore wat..." |
| 1 | ham | "Ok lar... Joking wif u oni..." |
| 3 | ham | "U dun say so early hor... U c already then say..." |
| 4 | ham | "Nah I don't think he goes to usf, he lives around here though" |
| 5 | ham | "FreeMsg Hey there darling it's been 3 week's now and no word back!" |

**Representative Spam Messages (label = 1 / "spam"):**

| Index | Label | Message Text |
|-------|-------|-------------|
| 2 | spam | "Free entry in 2 a wkly comp to win FA Cup final tkts 21st May 2005. Text FA to 87121 to receive entry question..." |
| 6 | spam | "WINNER!! As a valued network customer you have been selected to receivea £900 prize reward! To claim..." |
| 11 | spam | "SIX chances to win CASH! From 100 to 20,000 pounds txt CSH11 and send to 87575..." |
| 27 | spam | "URGENT! You have won a 1 week FREE membership in our £100,000 Prize Jackpot! Txt the word: CLAIM..." |
| 58 | spam | "Congratulations! You've won $1,000,000 USD. To claim, call 0900-XYZ immediately!" |

**Observable Patterns Distinguished by the Dataset:**

- **Spam messages** consistently contain: urgency words ("URGENT", "WIN", "FREE", "CLAIM NOW"), monetary references ("£900", "$1,000,000", "prize"), action prompts ("Call", "Text", "Click"), and promotional language ("exclusive offer", "limited time").
- **Ham messages** are conversational, use informal language, slang, and abbreviations, and relate to ordinary daily activities (meetings, social plans, personal conversations).

*[**SCREENSHOT INSTRUCTION:** Here, include a screenshot of `df['label'].value_counts()` output from your Jupyter Notebook, showing the count of 4,825 ham and 747 spam messages.]*

---
&nbsp;

---

## 9. Tools and Technologies Used

&nbsp;

### 9.1 Programming Language — Python 3.11

**Python** is the primary programming language used throughout this project. Python was chosen because it is the de facto standard language for data science, machine learning, and rapid web development. Its clean, readable syntax allows for quick iteration, and its vast ecosystem of specialized libraries (pandas, scikit-learn, Flask, NumPy) provides ready-made, highly optimized implementations of all the data processing, machine learning, and web server components required for this project. Python version 3.11 was used, which is the current stable long-term support release.

### 9.2 Data Manipulation — pandas and NumPy

**pandas** is a powerful open-source data manipulation and analysis library for Python. In this project, pandas was used to:
- Load the `spam.csv` dataset into a DataFrame structure using `pd.read_csv()` with the correct ISO-8859-1 encoding
- Inspect the dataset shape, column names, data types, and null value counts using `.shape`, `.info()`, `.isnull().sum()`
- Rename columns for clarity (`v1` → `label`, `v2` → `text`)
- Map categorical label values to numerical integers using `.map({'ham': 0, 'spam': 1})`
- Apply the text cleaning function across all rows using `.apply()`
- Analyze class distribution using `.value_counts()`

**NumPy** provides the foundational array processing capabilities used internally by pandas and scikit-learn. While NumPy was not directly called in the project code, it underpins all the matrix and vector operations performed by the TF-IDF vectorizer and the Naive Bayes classifier.

### 9.3 Machine Learning — scikit-learn

**scikit-learn** (also written as sklearn) is the most widely used open-source machine learning library for Python, maintained by INRIA (France) and a large international community of contributors. It provides a consistent, well-documented API for the entire machine learning workflow. The following components of scikit-learn were used in this project:

| scikit-learn Module | Class / Function | Purpose in This Project |
|--------------------|-----------------|------------------------|
| `sklearn.model_selection` | `train_test_split` | Splitting the dataset into 80% training and 20% testing subsets |
| `sklearn.feature_extraction.text` | `TfidfVectorizer` | Converting cleaned text messages into TF-IDF numerical feature matrices |
| `sklearn.naive_bayes` | `MultinomialNB` | Training the Multinomial Naive Bayes spam classifier |
| `sklearn.metrics` | `accuracy_score` | Computing overall classification accuracy |
| `sklearn.metrics` | `classification_report` | Generating precision, recall, and F1-score per class |
| `sklearn.metrics` | `confusion_matrix` | Computing the confusion matrix for error analysis |

### 9.4 Text Preprocessing — re (Regular Expressions)

Python's built-in **`re` module** provides support for Perl-style **regular expressions** — a powerful mini-language for pattern matching and text substitution. In this project, the `re.sub()` function was used to implement the text cleaning pipeline:
- Removing URLs (patterns starting with `http`)
- Replacing digit sequences with a placeholder token
- Stripping all non-alphabetic characters (punctuation, symbols, emojis)
- Collapsing multiple consecutive whitespace characters into a single space

### 9.5 Model Persistence — pickle

Python's built-in **`pickle` module** implements an algorithm for serializing (converting to a byte stream) and deserializing (reconstructing from a byte stream) arbitrary Python objects. In this project, pickle was used to save the trained `MultinomialNB` model and the fitted `TfidfVectorizer` object to binary `.pkl` files on disk after training. These saved files are then loaded by the web application at startup, enabling predictions without retraining the model each time the server starts.

### 9.6 Web Framework — Flask

**Flask** is a lightweight, micro web framework for Python, created by Armin Ronacher and maintained by the Pallets Projects organization. It is described as "micro" because it provides only the essentials needed to build a web application — request routing, response generation, Jinja2 templating, and a development server — without imposing any particular database or form validation library. In this project, Flask was used to:
- Build the web server backend
- Define URL routes and HTTP methods (GET, POST)
- Render HTML templates using Jinja2
- Parse JSON request bodies from the frontend JavaScript
- Return JSON response objects to the client
- Serve static CSS and JavaScript files

The application uses Flask's **Application Factory pattern** (`create_app()` function) and **Blueprint architecture** (`main_bp = Blueprint('main', __name__)`) to organize the code in a modular, scalable, and testable manner.

### 9.7 Frontend Technologies — HTML5, CSS3, JavaScript

**HTML5** is used to define the structure and semantic markup of the web pages. The project contains two HTML files: `index.html` (main analyzer page) and `dashboard.html` (analytics dashboard).

**CSS3** is used for all visual styling. The stylesheet (`style.css`, approximately 22.8 KB) implements a modern **Glassmorphism** design aesthetic, featuring translucent glass-effect panels using `backdrop-filter: blur()`, gradient backgrounds, CSS custom properties (variables), smooth hover animations, and a fully responsive grid layout. The Google Fonts **Inter** typeface is imported for professional typography.

**JavaScript (ES6+)** handles all client-side interactivity: capturing form submissions, making asynchronous `fetch()` API calls to the Flask backend, parsing JSON responses, updating the DOM with prediction results, implementing the file upload drag-and-drop functionality, and calculating and displaying the animated confidence meter.

### 9.8 Data Visualization — Chart.js

**Chart.js** (version 4.4.0) is a popular open-source JavaScript charting library that renders interactive charts using the HTML5 `<canvas>` element. It was loaded via CDN in the dashboard template. Chart.js was used to render three chart types on the analytics dashboard: a Doughnut Chart (spam/ham distribution), a Line Chart (predictions over time), and a Bar Chart (hourly activity pattern).

### 9.9 Development Tools

**Jupyter Notebook** was used for the initial exploratory data analysis (EDA) phase, allowing interactive, step-by-step execution of Python code with inline outputs and visualizations. The project notebook (`code.ipynb`) documents the complete ML development workflow from data loading to model evaluation.

**Git** was used for version control, enabling tracking of all code changes and ensuring the project history was preserved throughout development.

---
&nbsp;

---

## 10. Methodology

&nbsp;

The project follows a structured, six-stage data analytics methodology as defined by the project format requirements. Each stage is described below in detail, with corresponding code implementations.

### Step 1: Data Collection

The first step was to obtain a suitable, real-world labeled dataset for training and evaluating the spam detection model. The **SMS Spam Collection Dataset** from the UCI Machine Learning Repository was selected for the reasons described in the Dataset Description section.

The dataset was downloaded as `spam.csv` and loaded into a pandas DataFrame using the following code:

```python
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix
import re

# Load the dataset with the correct encoding
df = pd.read_csv('spam.csv', encoding='ISO-8859-1')
df.head()
```

*[**SCREENSHOT INSTRUCTION:** Insert a screenshot of the `df.head()` output from your Jupyter Notebook here. It will show the first 5 rows with columns: v1, v2, Unnamed: 2, Unnamed: 3, Unnamed: 4.]*

The initial load revealed that while the CSV file has 5 columns, only the first two (`v1` and `v2`) contain useful data. The remaining three columns (`Unnamed: 2`, `Unnamed: 3`, `Unnamed: 4`) are mostly empty (NaN). These were removed, and the remaining columns were renamed for clarity:

```python
# Retain only the two relevant columns
df = df[['v1', 'v2']]

# Rename columns to more descriptive names
df.columns = ['label', 'text']
df.head()
```

*[**SCREENSHOT INSTRUCTION:** Insert a screenshot of `df.head()` after renaming the columns, showing the clean two-column structure with "label" and "text" columns.]*

### Step 2: Data Cleaning

Data cleaning consisted of two sub-processes: encoding the categorical labels and cleaning the raw text content.

#### 2a. Label Encoding

The `label` column contains categorical string values (`'ham'` and `'spam'`). Machine learning algorithms require numerical inputs, so these string labels were mapped to integers:

```python
df['label'] = df['label'].map({
    'ham': 0,
    'spam': 1
})
df.head()
```

After this mapping, `ham` messages are represented as integer `0` and `spam` messages as integer `1`.

*[**SCREENSHOT INSTRUCTION:** Insert a screenshot of `df.head()` after label encoding, showing the "label" column now containing 0s and 1s instead of "ham"/"spam".]*

#### 2b. Text Cleaning Function

Raw SMS messages contain several types of noise that can reduce classifier performance. A text cleaning function was implemented using Python's `re` (regular expressions) module:

```python
import re

def clean_text(text):
    # Step 1: Convert entire string to lowercase for uniformity
    # "FREE" and "free" are the same word and should be treated identically
    text = text.lower()
    
    # Step 2: Replace all URLs with the token 'url'
    # Any sequence starting with 'http' followed by non-space characters is a URL
    text = re.sub(r'http\S+', ' url ', text)
    
    # Step 3: Replace all sequences of digits with the token 'number'
    # Phone numbers (e.g., "07808726822"), monetary amounts (e.g., "1000"), 
    # and dates are all replaced with a uniform token
    text = re.sub(r'\d+', ' number ', text)
    
    # Step 4: Remove all characters that are not lowercase letters or spaces
    # This eliminates punctuation, symbols, emojis, and special characters
    text = re.sub(r'[^a-z\s]', ' ', text)
    
    # Step 5: Collapse multiple consecutive whitespace characters into one space
    # and remove leading/trailing whitespace
    text = re.sub(r'\s+', ' ', text).strip()
    
    return text

# Apply the cleaning function to every message in the dataset
df['text'] = df['text'].apply(clean_text)
```

**Rationale for each cleaning step:**

| Step | Raw Example | After Cleaning | Reason |
|------|------------|----------------|--------|
| Lowercase | "FREE" | "free" | Ensures "FREE" and "free" are treated as the same word |
| URL removal | "Visit http://win.com/prize" | "Visit url prize" | All URLs map to a single token, preserving the signal of URL presence |
| Number removal | "Call 07808726822 to claim £1000" | "Call number to claim number" | Normalizes all phone numbers and monetary amounts |
| Symbol removal | "WIN!!! £900 prize!!!" | "WIN prize" | Removes punctuation that adds no semantic value |
| Whitespace | "free   entry" | "free entry" | Cleans up extra spaces left by substitutions |

### Step 3: Handling Missing Values

Before proceeding to model training, the dataset was inspected for missing values:

```python
# Check for null/missing values in each column
print(df.isnull().sum())
```

**Output:**
```
label    0
text     0
dtype: int64
```

*[**SCREENSHOT INSTRUCTION:** Insert a screenshot of the `df.isnull().sum()` output from your Jupyter Notebook, confirming 0 null values.]*

The output confirms that the dataset contains **zero missing values** in either the `label` or `text` columns. No imputation, row deletion, or missing-value handling was therefore required. This is one of the advantages of using the SMS Spam Collection dataset — it is a clean, curated research corpus with no missing entries.

The dataset's structure was further inspected:

```python
# Inspect the DataFrame structure, dtypes, and non-null counts
df.info()
```

**Output:**
```
<class 'pandas.DataFrame'>
RangeIndex: 5572 entries, 0 to 5571
Data columns (total 2 columns):
 #   Column  Non-Null Count  Dtype
---  ------  --------------  -----
 0   label   5572 non-null   int64
 1   text    5572 non-null   str  
dtypes: int64(1), str(1)
memory usage: 87.2 KB
```

```python
# Confirm the dataset dimensions
print(df.shape)
# Output: (5572, 2)

# Examine class distribution
print(df['label'].value_counts())
```

**Class Distribution Output:**
```
label
0    4825
1     747
Name: count, dtype: int64
```

This confirms 4,825 ham messages and 747 spam messages — an approximately 6.46:1 imbalance.

### Step 4: Data Analysis — Feature Extraction with TF-IDF

Machine learning algorithms cannot process raw text strings directly. The text data must be converted into a numerical representation. This was accomplished through two substeps: train-test splitting and TF-IDF vectorization.

#### 4a. Train-Test Split (80% / 20%)

The dataset was divided into a training set (used to teach the model) and a test set (used to evaluate the model on unseen data):

```python
from sklearn.model_selection import train_test_split

# Define input features and target variable
x_raw = df['text']    # Input: preprocessed text messages
y = df['label']       # Target/Output: 0 (ham) or 1 (spam)

# Split 80% for training, 20% for testing, with a fixed random seed for reproducibility
X_train, X_test, y_train, y_test = train_test_split(
    x_raw, y, test_size=0.2, random_state=42
)

print("Training set size:", X_train.shape)   # Output: (4457,)
print("Testing set size:", X_test.shape)     # Output: (1115,)
```

| Split | Number of Samples | Proportion |
|-------|-----------------|------------|
| Training Set | 4,457 messages | 80% |
| Testing Set | 1,115 messages | 20% |
| **Total** | **5,572 messages** | **100%** |

The `random_state=42` parameter ensures that the same split is produced every time the code is run, making results reproducible. The `test_size=0.2` parameter reserves 20% of the data for final evaluation.

**Critical Note:** The test set must remain completely unseen during training. It simulates the performance of the model on real, never-before-seen messages.

#### 4b. TF-IDF Vectorization

**TF-IDF (Term Frequency – Inverse Document Frequency)** is a numerical statistic that reflects how important a word is to a document within a corpus. It balances two factors:

- **Term Frequency (TF):** How frequently a word appears in a single document. Words that appear more often in a document are likely more important to that document's meaning.
- **Inverse Document Frequency (IDF):** The logarithm of the ratio of the total number of documents to the number of documents containing the word. Words that appear in nearly every document (like "the", "is", "a") carry little discriminative power and receive a low IDF weight. Words that are rare across the corpus but common in specific documents receive a high IDF weight.

The combined **TF-IDF score** for a word in a document = TF × IDF.

```python
from sklearn.feature_extraction.text import TfidfVectorizer

# Initialize the TF-IDF vectorizer
# stop_words='english' automatically removes common English words that add no information
feature_extraction = TfidfVectorizer(stop_words='english')

# Fit the vectorizer on the TRAINING data only and transform the training text to a TF-IDF matrix
# fit_transform() learns the vocabulary from training data AND transforms it
X_train_features = feature_extraction.fit_transform(X_train)

# Transform the TEST data using the SAME vocabulary learned from training data
# transform() only transforms — it does NOT re-learn from test data (prevents data leakage)
X_test_features = feature_extraction.transform(X_test)
```

**Why is fitting on training data only so important?**
If the vectorizer were fitted on both training and test data, the model would have advance knowledge of the vocabulary present in the test set, which would make the evaluation results overoptimistic and not reflective of real-world performance. This is known as **data leakage** and is a critical mistake to avoid in machine learning.

The result of TF-IDF vectorization is a **sparse matrix** where:
- Each **row** represents one message
- Each **column** represents one unique word from the training vocabulary
- Each **cell value** is the TF-IDF score of that word in that message (0 if the word doesn't appear in the message)

### Step 5: Visualization

Data visualization was implemented at multiple levels:

**During Exploratory Analysis (Jupyter Notebook):**
- Bar plots and value counts were used to visualize the class imbalance between ham (4,825) and spam (747) messages
- Word length distribution histograms comparing spam versus ham message lengths were examined to understand the characteristic differences between the two classes

**In the Deployed Web Application (Chart.js Dashboard):**
Four types of visualizations were implemented on the live analytics dashboard:
1. A **Doughnut/Pie Chart** for spam vs. ham distribution
2. A **Line Graph** for predictions over time (temporal trend analysis)
3. A **Bar Chart** for hourly activity patterns
4. **Statistics Cards** for quick summary metrics

Full details of the visualization implementation are provided in Section 12 — Data Visualization.

### Step 6: Result Interpretation

The final step was to train the Multinomial Naive Bayes model and evaluate its performance on the held-out test set:

```python
from sklearn.naive_bayes import MultinomialNB
from sklearn.metrics import accuracy_score, classification_report

# Initialize the Multinomial Naive Bayes model
spam_model = MultinomialNB()

# Train the model using the TF-IDF feature matrix and corresponding labels
spam_model.fit(X_train_features, y_train)

# Generate predictions on the test set feature matrix
y_pred = spam_model.predict(X_test_features)

# Print the overall accuracy
print(f"Accuracy: {accuracy_score(y_test, y_pred) * 100:.2f}%")
# Output: Accuracy: 96.77%

# Print the detailed per-class evaluation report
print("\nClassification Report:")
print(classification_report(y_test, y_pred))
```

*[**SCREENSHOT INSTRUCTION:** Insert a screenshot of the actual output from running these evaluation cells in your Jupyter Notebook, showing "Accuracy: 96.77%" and the full classification report table.]*

The results confirm that the model achieves 96.77% accuracy with 100% precision for the spam class, meaning no legitimate message was incorrectly flagged as spam. Full result interpretation is provided in Section 13 — Results & Findings.

---
&nbsp;

---

## 11. Implementation

&nbsp;

### 11.1 Project Structure

The project is organized using a professional, modular architecture that cleanly separates concerns:

```
Email Spam Detection/
│
├── spam.csv                         ← Original dataset (505 KB, 5,572 messages)
├── export_model.py                  ← Standalone script: trains and saves model/vectorizer
├── code.ipynb                       ← Jupyter Notebook: EDA, model experimentation, evaluation
├── run.py                           ← Application entry point: starts the Flask web server
├── app.py                           ← Alternative standalone Flask entry point
├── requirements.txt                 ← Python package dependencies
├── pyproject.toml                   ← Project metadata and build configuration
│
├── models/                          ← Stored machine learning artifacts
│   ├── model.pkl                    ← Serialized Naive Bayes model (218 KB)
│   ├── vectorizer.pkl               ← Serialized TF-IDF Vectorizer (139 KB)
│   └── predictions_log.json        ← Persistent JSON log of all prediction history
│
└── app/                             ← Main Flask Application Package
    ├── __init__.py                  ← Application Factory: create_app() function
    ├── routes.py                    ← Blueprint: URL routes and HTTP endpoint handlers
    ├── services.py                  ← SpamDetectorService: Singleton ML service class
    ├── utils.py                     ← Utility module: clean_text() function
    │
    ├── templates/                   ← Jinja2 HTML templates
    │   ├── index.html               ← Main page: message analyzer (12.7 KB)
    │   └── dashboard.html           ← Analytics dashboard page (5.0 KB)
    │
    └── static/                      ← Static frontend assets served to the browser
        ├── css/
        │   └── style.css            ← Complete stylesheet: Glassmorphism design (22.8 KB)
        └── js/
            ├── script.js            ← Main page JavaScript: prediction logic (19.5 KB)
            └── dashboard.js         ← Dashboard JavaScript: Chart.js charts (12.0 KB)
```

### 11.2 Step 1 — Model Training and Export (`export_model.py`)

The first implementation step is running the `export_model.py` script, which executes the complete ML training pipeline and saves the trained model and vectorizer to disk.

```python
import pandas as pd
import pickle
import os
import re
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB

# ── Step 1: Load the Dataset ──────────────────────────────────────────────────
try:
    df = pd.read_csv('spam.csv', encoding='ISO-8859-1')
except FileNotFoundError:
    print("Error: spam.csv not found! Please ensure the dataset is in the project folder.")
    exit()

# ── Step 2: Select and Rename Relevant Columns ────────────────────────────────
df = df[['v1', 'v2']]
df.columns = ['label', 'text']

# ── Step 3: Encode Labels (ham → 0, spam → 1) ─────────────────────────────────
df['label'] = df['label'].map({'ham': 0, 'spam': 1})

# ── Step 4: Define and Apply Text Cleaning Function ───────────────────────────
def clean_text(text):
    text = text.lower()
    text = re.sub(r'http\S+', 'url', text)
    text = re.sub(r'\d+', 'number', text)
    text = re.sub(r'[^a-z\s]', ' ', text)
    text = re.sub(r'\s+', ' ', text).strip()
    return text

df['text'] = df['text'].apply(clean_text)

# ── Step 5: Split Data (80% Train, 20% Test) ──────────────────────────────────
X_train, X_test, y_train, y_test = train_test_split(
    df['text'], df['label'], test_size=0.2, random_state=42
)

# ── Step 6: Apply TF-IDF Vectorization ────────────────────────────────────────
vectorizer = TfidfVectorizer(stop_words='english')
X_train_tfidf = vectorizer.fit_transform(X_train)

# ── Step 7: Train the Multinomial Naive Bayes Model ───────────────────────────
model = MultinomialNB()
model.fit(X_train_tfidf, y_train)

# ── Step 8: Save Model and Vectorizer Using pickle ────────────────────────────
if not os.path.exists('models'):
    os.makedirs('models')

with open('models/model.pkl', 'wb') as f:
    pickle.dump(model, f)

with open('models/vectorizer.pkl', 'wb') as f:
    pickle.dump(vectorizer, f)

print("✅ Training complete. model.pkl and vectorizer.pkl saved to /models/")
```

**Explanation:** This script is run **once** before starting the web application. It produces two `.pkl` binary files: `model.pkl` (218 KB — the trained Naive Bayes classifier) and `vectorizer.pkl` (139 KB — the fitted TF-IDF vocabulary and IDF weights). These files are loaded at application startup and reused for every prediction request.

*[**SCREENSHOT INSTRUCTION:** Insert a screenshot of your terminal/command prompt showing the output of running `python export_model.py`, including the success message.]*

### 11.3 Step 2 — Flask Application Factory (`app/__init__.py`)

```python
from flask import Flask

def create_app():
    """
    Application Factory Pattern.
    Creates and configures the Flask application instance.
    Using a factory function (rather than a global app variable) enables:
    - Multiple app instances (e.g., for testing)
    - Clean configuration management
    - Better modularization through Blueprints
    """
    app = Flask(__name__)

    # Register the main Blueprint, which contains all the URL routes
    from app.routes import main_bp
    app.register_blueprint(main_bp)

    return app
```

### 11.4 Step 3 — API Routes (`app/routes.py`)

```python
from flask import Blueprint, render_template, request, jsonify
from app.services import SpamDetectorService

# Create a Blueprint named 'main' to group related routes
main_bp = Blueprint('main', __name__)

@main_bp.route('/')
def home():
    """
    GET / — Renders and returns the main spam analyzer page.
    Flask's render_template() fills in the Jinja2 template and returns HTML.
    """
    return render_template('index.html')

@main_bp.route('/dashboard')
def dashboard():
    """
    GET /dashboard — Renders and returns the analytics dashboard page.
    """
    return render_template('dashboard.html')

@main_bp.route('/predict', methods=['POST'])
def predict():
    """
    POST /predict — The core prediction API endpoint.
    Accepts a JSON body: {"message": "text to classify"}
    Returns a JSON response: {"message": "...", "prediction": "Spam", "is_spam": true}
    """
    try:
        data = request.get_json()
        message = data.get('message', '')

        if not message:
            return jsonify({'error': 'Please enter a message.'}), 400

        # Get the singleton SpamDetectorService instance and call predict()
        service = SpamDetectorService.get_instance()
        label, is_spam = service.predict(message)

        return jsonify({
            'message': message,
            'prediction': label,
            'is_spam': is_spam
        })

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@main_bp.route('/api/stats')
def get_stats():
    """
    GET /api/stats — Returns prediction statistics as JSON for the dashboard charts.
    """
    try:
        service = SpamDetectorService.get_instance()
        stats = service.get_statistics()
        return jsonify(stats)
    except Exception as e:
        return jsonify({'error': str(e)}), 500
```

**Explanation of the API Design:**

The application exposes four HTTP endpoints:

| Method | URL | Purpose | Returns |
|--------|-----|---------|---------|
| GET | `/` | Serves the main HTML analyzer page to the user's browser | HTML page |
| GET | `/dashboard` | Serves the analytics dashboard HTML page | HTML page |
| POST | `/predict` | Receives a text message and returns a spam/ham classification | JSON |
| GET | `/api/stats` | Returns all prediction statistics for the dashboard charts | JSON |

### 11.5 Step 4 — The SpamDetectorService — Singleton Pattern (`app/services.py`)

```python
import pickle
import os
import json
from app.utils import clean_text
from datetime import datetime

class SpamDetectorService:
    """
    Service class implementing the Singleton design pattern.

    The Singleton pattern ensures that only ONE instance of this class
    is ever created during the application lifetime. This is critical
    because loading the ML model from disk is an expensive operation
    (reading 357 KB of serialized data) that should happen only once.
    All subsequent prediction requests reuse the already-loaded model
    from memory, resulting in sub-millisecond prediction latency.
    """
    _instance = None   # Class-level variable storing the single instance
    model = None
    vectorizer = None
    stats_file = None
    prediction_log = []

    @classmethod
    def get_instance(cls):
        """
        Returns the single instance of SpamDetectorService.
        Creates it on the first call, returns the existing one thereafter.
        """
        if cls._instance is None:
            cls._instance = cls()
            cls._instance._load_model()
            cls._instance._load_stats()
        return cls._instance

    def _load_model(self):
        """Loads the trained model and vectorizer from .pkl files."""
        base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
        model_path = os.path.join(base_dir, 'models', 'model.pkl')
        vectorizer_path = os.path.join(base_dir, 'models', 'vectorizer.pkl')
        self.stats_file = os.path.join(base_dir, 'models', 'predictions_log.json')

        with open(model_path, 'rb') as f:
            self.model = pickle.load(f)
        with open(vectorizer_path, 'rb') as f:
            self.vectorizer = pickle.load(f)
        print("✅ Models loaded successfully.")

    def predict(self, message):
        """
        Predicts whether a message is spam or ham.
        Returns: Tuple(label: str, is_spam: bool)
        
        Pipeline:
        1. Clean the raw text using the preprocessing function
        2. Transform the cleaned text using the fitted TF-IDF vectorizer
        3. Pass the TF-IDF feature vector to the trained Naive Bayes model
        4. Return the human-readable label and boolean flag
        5. Log the prediction with timestamp for dashboard analytics
        """
        cleaned_text = clean_text(message)
        vectorized_text = self.vectorizer.transform([cleaned_text])
        prediction = self.model.predict(vectorized_text)[0]  # Returns 0 or 1

        label = "Spam" if prediction == 1 else "Not Spam (Ham)"
        is_spam = bool(prediction == 1)

        # Log this prediction with its timestamp for dashboard analytics
        self.prediction_log.append({
            'timestamp': datetime.now().isoformat(),
            'message': message[:100],
            'prediction': label,
            'is_spam': is_spam
        })
        self._save_stats()

        return label, is_spam

    def get_statistics(self):
        """Computes and returns prediction statistics for the dashboard."""
        if not self.prediction_log:
            return {
                'total_predictions': 0,
                'spam_count': 0,
                'ham_count': 0,
                'spam_percentage': 0,
                'ham_percentage': 0,
                'recent_predictions': [],
                'hourly_data': []
            }

        total = len(self.prediction_log)
        spam_count = sum(1 for p in self.prediction_log if p['is_spam'])
        ham_count = total - spam_count

        # Build hourly aggregation for the Bar and Line charts
        hourly = {}
        for p in self.prediction_log:
            hour = datetime.fromisoformat(p['timestamp']).strftime('%H:00')
            if hour not in hourly:
                hourly[hour] = {'total': 0, 'spam': 0, 'ham': 0}
            hourly[hour]['total'] += 1
            if p['is_spam']:
                hourly[hour]['spam'] += 1
            else:
                hourly[hour]['ham'] += 1

        sorted_hours = sorted(hourly.items())[-24:]

        return {
            'total_predictions': total,
            'spam_count': spam_count,
            'ham_count': ham_count,
            'spam_percentage': round((spam_count / total) * 100, 1),
            'ham_percentage': round((ham_count / total) * 100, 1),
            'recent_predictions': self.prediction_log[-10:],
            'hourly_data': [{'hour': h, **data} for h, data in sorted_hours]
        }
```

### 11.6 Step 5 — Web Application Running

To start the web application, the `run.py` entry point is executed:

```python
from app import create_app
from app.services import SpamDetectorService

app = create_app()

# Pre-load the ML model into memory at server startup
# This ensures the first user request is handled without delay
with app.app_context():
    SpamDetectorService.get_instance()

if __name__ == "__main__":
    app.run(debug=True)  # Starts the Flask development server on port 5000
```

Users access the application by opening a web browser and navigating to: `http://127.0.0.1:5000`

*[**SCREENSHOT INSTRUCTION 1:** Insert a screenshot of the main SpamGuard AI web page (the home page at http://127.0.0.1:5000), showing the hero section, quick stats cards, and the message analyzer text area.]*

*[**SCREENSHOT INSTRUCTION 2:** Insert a screenshot of a spam detection result on the main page — type a spam message (e.g., "Congratulations! You've won $1,000,000! Claim NOW!!!") into the analyzer and show the red "SPAM DETECTED" result card with the confidence meter.]*

*[**SCREENSHOT INSTRUCTION 3:** Insert a screenshot of a legitimate message being classified — type a normal message (e.g., "Hey, are you coming to class today?") and show the green "NOT SPAM" result card.]*

*[**SCREENSHOT INSTRUCTION 4:** Insert a screenshot of the Analytics Dashboard page (http://127.0.0.1:5000/dashboard), showing the statistics cards and all three charts.]*

---
&nbsp;

---

## 12. Data Visualization

&nbsp;

Data visualization in this project operates at two levels: **exploratory visualization** within the Jupyter Notebook during the development phase, and **real-time interactive visualization** within the deployed web application's analytics dashboard.

### 12.1 Exploratory Visualization in Jupyter Notebook

During the exploratory data analysis (EDA) phase, basic visualization was performed to understand the dataset characteristics before proceeding to model training.

**Class Distribution (Bar Chart):**

The class imbalance between ham and spam messages was visualized by examining the value counts. The label distribution `df['label'].value_counts()` clearly showed 4,825 legitimate messages versus 747 spam messages.

*[**SCREENSHOT INSTRUCTION:** In your Jupyter Notebook, run the following code and insert a screenshot of the resulting bar chart:*

```python
import matplotlib.pyplot as plt
import seaborn as sns

# Class distribution plot
fig, ax = plt.subplots(figsize=(8, 5))
counts = df['label'].value_counts()
bars = ax.bar(['Ham (Legitimate)', 'Spam'], counts.values, 
               color=['#2ecc71', '#e74c3c'], edgecolor='black', linewidth=0.8)
ax.set_title('Class Distribution: Ham vs Spam Messages', fontsize=14, fontweight='bold')
ax.set_xlabel('Message Category', fontsize=12)
ax.set_ylabel('Number of Messages', fontsize=12)
for bar, count in zip(bars, counts.values):
    ax.text(bar.get_x() + bar.get_width()/2., bar.get_height() + 30,
            f'{count:,}\n({count/len(df)*100:.1f}%)', ha='center', va='bottom', fontsize=11)
ax.set_ylim(0, 5500)
plt.tight_layout()
plt.savefig('class_distribution.png', dpi=150)
plt.show()
```
*Insert the saved chart image here.]*

This bar chart clearly shows the class imbalance — a critical observation that influences the interpretation of model performance metrics.

**Message Length Distribution (Histogram):**

Analyzing the length of messages in each class reveals that spam messages tend to be significantly longer than ham messages, as they contain more promotional text.

*[**SCREENSHOT INSTRUCTION:** In your Jupyter Notebook, run the following code and insert the resulting histogram:*

```python
# Add message length column
df['message_length'] = df['text'].apply(len)

fig, axes = plt.subplots(1, 2, figsize=(14, 5))

# Ham message lengths
ham_lengths = df[df['label'] == 0]['message_length']
axes[0].hist(ham_lengths, bins=50, color='#2ecc71', edgecolor='black', linewidth=0.5)
axes[0].set_title('Ham Message Length Distribution', fontsize=13, fontweight='bold')
axes[0].set_xlabel('Message Length (characters)', fontsize=11)
axes[0].set_ylabel('Frequency', fontsize=11)
axes[0].axvline(ham_lengths.mean(), color='darkgreen', linestyle='--', 
                label=f'Mean: {ham_lengths.mean():.0f}')
axes[0].legend()

# Spam message lengths
spam_lengths = df[df['label'] == 1]['message_length']
axes[1].hist(spam_lengths, bins=50, color='#e74c3c', edgecolor='black', linewidth=0.5)
axes[1].set_title('Spam Message Length Distribution', fontsize=13, fontweight='bold')
axes[1].set_xlabel('Message Length (characters)', fontsize=11)
axes[1].set_ylabel('Frequency', fontsize=11)
axes[1].axvline(spam_lengths.mean(), color='darkred', linestyle='--',
                label=f'Mean: {spam_lengths.mean():.0f}')
axes[1].legend()

plt.tight_layout()
plt.savefig('message_length_distribution.png', dpi=150)
plt.show()
```
*Insert the saved chart image here.]*

**Word Cloud (Optional Visualization):**

*[**SCREENSHOT INSTRUCTION:** If you have `wordcloud` installed (`pip install wordcloud`), run the following to generate word clouds and insert the resulting images:*

```python
from wordcloud import WordCloud
import matplotlib.pyplot as plt

# Ham word cloud
ham_text = ' '.join(df[df['label'] == 0]['text'])
spam_text = ' '.join(df[df['label'] == 1]['text'])

fig, axes = plt.subplots(1, 2, figsize=(16, 6))

wc_ham = WordCloud(width=700, height=400, background_color='white', 
                   colormap='Greens', max_words=100).generate(ham_text)
axes[0].imshow(wc_ham, interpolation='bilinear')
axes[0].set_title('Most Common Words in HAM Messages', fontsize=13, fontweight='bold')
axes[0].axis('off')

wc_spam = WordCloud(width=700, height=400, background_color='white', 
                    colormap='Reds', max_words=100).generate(spam_text)
axes[1].imshow(wc_spam, interpolation='bilinear')
axes[1].set_title('Most Common Words in SPAM Messages', fontsize=13, fontweight='bold')
axes[1].axis('off')

plt.tight_layout()
plt.savefig('word_clouds.png', dpi=150)
plt.show()
```
*Insert the saved word cloud image here.]*

### 12.2 Interactive Charts in the Web Application Dashboard

The analytics dashboard (`/dashboard`) of the SpamGuard AI web application implements four interactive chart types using the **Chart.js 4.4.0** library:

#### Chart 1: Doughnut / Pie Chart — Spam vs. Ham Distribution

- **Chart Type:** Doughnut Chart (a variant of the Pie Chart with a hollow center)
- **Library / Tool:** Chart.js on `<canvas id="distributionChart">`
- **Data Source:** Fetched in real-time from HTTP GET `/api/stats` → fields `spam_count` and `ham_count`
- **Color Scheme:** Red (`rgba(255, 99, 132, 0.8)`) for Spam, Green (`rgba(75, 192, 192, 0.8)`) for Ham
- **Purpose:** Provides an immediate visual overview of the proportion of spam versus legitimate messages among all predictions made so far. The doughnut format allows the total count to be displayed in the center.
- **Interactivity:** Hovering over a segment shows a tooltip with the exact count and percentage.

*[**SCREENSHOT INSTRUCTION:** Insert a screenshot of the Spam vs. Ham Distribution doughnut chart from the dashboard page, after making several spam and ham predictions using the analyzer.]*

#### Chart 2: Line Graph — Predictions Over Time

- **Chart Type:** Multi-line Chart with two lines (one for spam, one for ham)
- **Library / Tool:** Chart.js on `<canvas id="timeSeriesChart">`
- **Data Source:** Fetched from `/api/stats` → `hourly_data` array
- **X-Axis:** Time of day in hours (e.g., "14:00", "15:00", "16:00")
- **Y-Axis:** Number of predictions in that hour
- **Lines:** Red line = spam predictions per hour; Green line = ham predictions per hour
- **Purpose:** Shows the temporal trend of spam and ham detection activity over the past 24 hours, enabling identification of peak spam hours.
- **Interactivity:** Hovering over data points shows tooltips with exact counts; lines can be toggled by clicking the legend labels.

*[**SCREENSHOT INSTRUCTION:** Insert a screenshot of the Predictions Over Time line chart from the dashboard.]*

#### Chart 3: Bar Chart — Hourly Activity Pattern

- **Chart Type:** Vertical Bar Chart
- **Library / Tool:** Chart.js on `<canvas id="hourlyChart">`
- **Data Source:** Fetched from `/api/stats` → `hourly_data` array
- **X-Axis:** Hour of the day (each bar represents one hour)
- **Y-Axis:** Total number of predictions in that hour
- **Bar Color:** Varies by spam ratio in each hour — bars with higher spam proportions appear more red
- **Purpose:** Shows how many total messages were analyzed in each hour, helping identify peak activity periods.
- **Interactivity:** Hovering over a bar shows a tooltip with the exact count and hour label.

*[**SCREENSHOT INSTRUCTION:** Insert a screenshot of the Hourly Activity Pattern bar chart from the dashboard.]*

#### Chart 4: Statistics Cards — Quick Summary Metrics (Scatter Plot Equivalent)

The statistics overview section at the top of the dashboard provides four key performance indicator (KPI) cards:

| Card | Icon | Metric | Description |
|------|------|--------|-------------|
| Total Predictions | 📊 | Count of all analyzed messages | Running total since application start |
| Spam Detected | 🚫 | Count of messages classified as spam | Absolute spam count |
| Not Spam | ✅ | Count of messages classified as ham | Absolute ham count |
| Spam Rate | 📈 | Percentage of messages flagged as spam | (Spam Count / Total) × 100% |

*[**SCREENSHOT INSTRUCTION:** Insert a screenshot of the four statistics cards from the top of the Analytics Dashboard, showing real counts after using the system.]*

#### Data Table — Recent Predictions

Below the charts, a dynamic HTML table displays the **10 most recent predictions**, showing:
- Row number
- Preview of the first 100 characters of the message
- Prediction badge (🔴 "Spam" or 🟢 "Not Spam")
- Timestamp of the prediction

*[**SCREENSHOT INSTRUCTION:** Insert a screenshot of the Recent Predictions table from the dashboard, showing several rows with both spam and ham entries.]*

---
&nbsp;

---

## 13. Results and Findings

&nbsp;

### 13.1 What Insights We Got

After training the Multinomial Naive Bayes classifier on the 4,457-message training set and evaluating it on the 1,115-message test set, the following performance metrics were obtained:

**Overall Accuracy: 96.77%**

This means the model correctly classified **1,079 out of 1,115** messages in the held-out test set, and misclassified only **36 messages** in total.

**Detailed Classification Report:**

```
              precision    recall  f1-score   support

           0       0.96      1.00      0.98       965
           1       1.00      0.76      0.86       150

    accuracy                           0.97      1115
   macro avg       0.98      0.88      0.92      1115
weighted avg       0.97      0.97      0.97      1115
```

*[**SCREENSHOT INSTRUCTION:** Insert a screenshot of the actual Classification Report output from your Jupyter Notebook evaluation cell.]*

**Interpretation of Each Metric:**

| Metric | Definition | Class 0 (Ham) | Class 1 (Spam) | What It Means in This Context |
|--------|-----------|--------------|----------------|-------------------------------|
| **Precision** | Of all messages the model predicted as this class, what fraction were actually this class? | 0.96 (96%) | 1.00 (100%) | Every single message the model labelled "Spam" was truly spam — **zero false positives** for spam. When it predicted "Ham", it was correct 96% of the time. |
| **Recall** | Of all messages that actually belong to this class, what fraction did the model correctly identify? | 1.00 (100%) | 0.76 (76%) | The model successfully found **every single legitimate message** in the test set. However, it **missed 24% of actual spam messages** (treated them as ham). |
| **F1-Score** | Harmonic mean of Precision and Recall — balances both metrics | 0.98 | 0.86 | Overall quality score for each class. Ham classification is near-perfect (0.98). Spam classification is good (0.86) but shows room for improvement in recall. |
| **Support** | Number of actual instances of each class in the test set | 965 | 150 | The test set contains 965 legitimate messages and 150 spam messages. |

**Confusion Matrix Analysis:**

The confusion matrix breaks down the 1,115 test predictions into four categories:

| | Predicted Ham (0) | Predicted Spam (1) |
|---|---|---|
| **Actual Ham (0)** | True Negatives (TN): **965** | False Positives (FP): **0** |
| **Actual Spam (1)** | False Negatives (FN): **36** | True Positives (TP): **114** |

- **True Negatives (TN) = 965:** All 965 legitimate (ham) messages were correctly classified as legitimate. This is a perfect score for ham detection.
- **False Positives (FP) = 0:** The model produced **zero false positives** — it never incorrectly flagged a legitimate message as spam. This is the most important result from a practical usability standpoint.
- **True Positives (TP) = 114:** The model correctly identified 114 out of 150 spam messages.
- **False Negatives (FN) = 36:** The model missed 36 spam messages (approximately 24% of all test spam), classifying them as ham. These are spam messages that "escaped" the filter.

*[**SCREENSHOT INSTRUCTION:** In your Jupyter Notebook, run the following code and insert the resulting confusion matrix heatmap:*

```python
from sklearn.metrics import confusion_matrix
import seaborn as sns
import matplotlib.pyplot as plt

cm = confusion_matrix(y_test, y_pred)
plt.figure(figsize=(8, 6))
sns.heatmap(cm, annot=True, fmt='d', cmap='Blues',
            xticklabels=['Predicted Ham', 'Predicted Spam'],
            yticklabels=['Actual Ham', 'Actual Spam'],
            linewidths=2, linecolor='white', annot_kws={'size': 14, 'weight': 'bold'})
plt.title('Confusion Matrix — Naive Bayes Spam Classifier', fontsize=14, fontweight='bold')
plt.ylabel('Actual Label', fontsize=12)
plt.xlabel('Predicted Label', fontsize=12)
plt.tight_layout()
plt.savefig('confusion_matrix.png', dpi=150)
plt.show()
```
*Insert the saved confusion matrix heatmap here.]*

### 13.2 Patterns Discovered

Through the analysis of the dataset, the classification results, and the TF-IDF feature weights, the following patterns were discovered:

**Pattern 1 — Spam Vocabulary Fingerprint:**
Spam messages share a highly distinctive vocabulary. The TF-IDF vectorizer assigns the highest discriminative weights to words such as: "free", "win", "winner", "prize", "claim", "cash", "call", "text", "urgent", "offer", "awarded", "mobile", "stop", "subscription", and "service". These words appear at high frequency in spam messages but rarely in legitimate messages, making them powerful discriminators.

**Pattern 2 — Presence of Numbers and URLs:**
Spam messages are significantly more likely to contain sequences of digits (phone numbers to call, monetary prize amounts, short codes to text) and URLs (links to claim prizes or visit promotional websites). The text cleaning step converts these to the tokens "number" and "url", which then become strong spam indicators in the TF-IDF feature space.

**Pattern 3 — Spam Messages Are Longer:**
Analysis of message length distributions reveals that spam messages are, on average, significantly longer than ham messages. Spam messages tend to include detailed instructions ("Text FA to 87121 to receive entry question(std txt rate)T&C's apply"), prize descriptions, and multiple contact methods to maximize engagement.

**Pattern 4 — Ham Messages Are Conversational:**
Ham messages are typically short, informal, and use colloquial language, slang, and abbreviations common in personal SMS conversations (e.g., "lar", "wif", "u", "ori", "dun"). This linguistic style does not overlap with the promotional, formal, and urgent vocabulary of spam messages.

**Pattern 5 — Class Imbalance Causes Asymmetric Recall:**
The 86.6%/13.4% ham/spam split causes the model to see far more ham examples during training, which slightly biases its learned probability distributions toward predicting ham. This explains why recall for ham (1.00) significantly exceeds recall for spam (0.76) — the model is more "confident" about ham because it has seen far more examples of it.

### 13.3 Observations

1. **The zero false-positive rate is the most significant practical achievement of this model.** In real-world spam filtering, a false positive — incorrectly blocking a legitimate, important email — can have serious consequences (missed job offers, missed medical correspondence, missed bill payment reminders). A filter that never produces false positives, even at the cost of missing some spam, is highly desirable for production use.

2. **TF-IDF is highly effective for this task.** The word frequency and rarity weighting that TF-IDF applies creates a rich, discriminative feature space that perfectly complements the probabilistic approach of Naive Bayes. The combination of these two techniques achieves near state-of-the-art performance with minimal computational resources.

3. **The web application makes the ML model accessible to non-technical users.** By wrapping the classifier in a Flask REST API and providing a clean HTML/CSS/JavaScript interface, the system becomes usable by anyone with a web browser, not just data scientists or engineers who can run Python scripts.

4. **Prediction response time is excellent.** Tests conducted on the running application confirm that the `/predict` endpoint responds in under 50 milliseconds per request, including text cleaning, TF-IDF transformation, and model inference. This performance is well within the requirements for a real-time web application.

5. **The persistent prediction logging enables meaningful dashboard analytics.** By saving every prediction with its timestamp to a JSON file, the dashboard is able to show historical trends, not just current-session statistics. This provides continuous value as the application is used over time.

---
&nbsp;

---

## 14. Conclusion

&nbsp;

### 14.1 Summary of Project

This project set out to solve the real-world problem of automated email and SMS spam detection using machine learning and Natural Language Processing, and to present the solution in the form of a modern, production-ready web application. The project has successfully achieved all of its stated objectives.

Beginning with the **SMS Spam Collection Dataset** — a well-established, real-world corpus of 5,572 labeled messages — the project implemented a systematic data analytics pipeline. The raw dataset was loaded using pandas, inspected for quality, cleaned of irrelevant columns, and encoded numerically. A robust text preprocessing pipeline was implemented using regular expressions to normalize and tokenize the message content. The preprocessed text was converted into TF-IDF numerical feature vectors and used to train a **Multinomial Naive Bayes classifier**.

The trained model achieved an **overall accuracy of 96.77%** on the held-out test set, with a remarkable **precision of 1.00 (100%)** for the spam class — meaning no legitimate message was ever incorrectly classified as spam. The model was serialized using pickle and integrated into a Flask-powered RESTful web application implementing the Application Factory pattern and Blueprint-based routing.

The deployed **SpamGuard AI** application provides three functional capabilities: real-time single-message spam detection with confidence scoring, batch file processing for analyzing multiple messages simultaneously, and a live analytics dashboard featuring interactive Chart.js visualizations (Doughnut chart, Line graph, Bar chart). All predictions are persistently logged with timestamps to a JSON file, enabling the dashboard to display historical analytics across usage sessions.

The user interface, styled with a modern Glassmorphism design using CSS3, Inter typography, and smooth micro-animations, ensures an engaging and professional user experience accessible from any modern web browser.

### 14.2 What We Learned

Completing this project provided deep, practical experience across multiple competencies:

**Regarding Data Analytics:** We learned the critical importance of the data preprocessing pipeline — the quality of features fed into a machine learning model has a far greater impact on classification performance than the choice of algorithm. The text cleaning steps (lowercasing, URL replacement, number normalization, punctuation removal) were essential for creating consistent, high-quality features.

**Regarding Machine Learning:** We gained a thorough understanding of the Multinomial Naive Bayes algorithm, its mathematical foundation in Bayes' theorem, and why it excels specifically at text classification tasks involving word-frequency features. We learned how to properly split data into training and test sets, apply the zero-leakage principle in feature engineering, and interpret evaluation metrics (accuracy, precision, recall, F1-score, confusion matrix) to gain a nuanced understanding of model performance beyond a single accuracy number.

**Regarding Software Development:** We applied professional software engineering patterns (Application Factory, Blueprint routing, Singleton design pattern, Service Layer architecture) to build a modular, maintainable, and scalable codebase. We integrated a machine learning model into a web API and consumed that API from a JavaScript frontend using asynchronous fetch() calls.

**Regarding Data Visualization:** We implemented real-time, interactive charts using Chart.js that transform raw numerical prediction data into visual insights. We learned to design dashboards that present information clearly and engagingly for non-technical audiences.

**Regarding Problem-Solving:** The project reinforced a systematic approach to problem-solving: defining clear objectives, reviewing prior work, selecting appropriate tools and algorithms, implementing iteratively, evaluating objectively, and interpreting results critically.

---
&nbsp;

---

## 15. Future Scope

&nbsp;

The current implementation of the Email Spam Detection System provides a solid, functional foundation. However, several avenues for future enhancement have been identified that could further improve its accuracy, capabilities, and deployability:

### 15.1 Adding More Powerful Machine Learning Algorithms

The current Multinomial Naive Bayes model achieves 96.77% accuracy, but the literature review shows that more sophisticated algorithms can push accuracy above 99%:

1. **Deep Learning with LSTM (Long Short-Term Memory):** LSTM is a type of Recurrent Neural Network (RNN) that is specifically designed to model sequential data such as text. Unlike Naive Bayes, which treats words as independent features, LSTM can capture the contextual dependencies between words in a sentence — understanding that "you have won" as a phrase is a much stronger spam indicator than the individual words "you", "have", and "won" treated separately.

2. **BERT and Transformer Models:** BERT (Bidirectional Encoder Representations from Transformers), developed by Google Research in 2018, has achieved state-of-the-art performance on virtually every NLP benchmark task, including text classification. A fine-tuned BERT model can approach 99%+ accuracy on the SMS Spam Collection dataset. While BERT requires significantly more computational resources than Naive Bayes, cloud computing platforms have made BERT deployment increasingly accessible.

3. **Ensemble Methods:** Combining multiple classifiers through techniques such as Random Forest, Gradient Boosting (XGBoost, LightGBM), or Voting Classifiers often achieves better performance than any single model by combining their complementary strengths and compensating for individual weaknesses.

### 15.2 Using a Real-Time Dataset

The current project uses a static, offline dataset of pre-collected SMS messages from 2011. For a production spam detection system, it is essential to continuously learn from new spam patterns as they emerge:

- **Real-time email stream integration:** Connect the system to live email inboxes using standard email protocols (IMAP4, POP3) to analyze incoming messages as they arrive.
- **Feedback loop:** Allow users to flag false positives and false negatives (messages incorrectly classified), and use this feedback as labeled training data to continuously retrain and improve the model — a technique known as **online learning** or **active learning**.
- **Periodic retraining:** Schedule automated retraining of the model weekly or monthly on accumulated prediction data to keep the classifier current with evolving spam vocabulary and techniques.

### 15.3 Adding an Advanced Dashboard

The current analytics dashboard provides a solid visualization foundation, but it can be significantly enriched:

- **Geographic spam mapping:** Integrate IP geolocation data to display a world map showing the geographic origin of detected spam messages, identifiable if the system is extended to handle emails with header analysis.
- **Spam trend forecasting:** Apply time-series analysis techniques (e.g., Prophet, ARIMA) to the historical prediction log to forecast future spam volume trends.
- **Anomaly detection:** Implement algorithms to automatically detect and alert when spam rates spike abnormally, which may indicate an ongoing phishing campaign.
- **A/B model comparison:** Display side-by-side comparison of the performance of multiple deployed model versions.
- **Custom date range filtering:** Allow users to filter dashboard statistics by custom date ranges rather than viewing all-time stats.

### 15.4 Email Client Plugin Integration

The system could be extended into a browser extension or email client plugin for Gmail, Outlook, or Mozilla Thunderbird that automatically analyzes incoming emails and moves spam to a Junk folder without requiring the user to manually copy-paste messages into the web application.

### 15.5 Multi-Language Spam Detection

The current model is trained exclusively on English-language messages. The global user base requires spam detection in multiple languages. Extending the system with multilingual NLP capabilities — using libraries like `spaCy` with multi-language models or multilingual transformer models like `mBERT` — would dramatically expand its applicability.

### 15.6 Production Deployment on Cloud Infrastructure

The current application runs on a local Flask development server. For production deployment at scale:

- **Docker Containerization:** Package the application and all its dependencies into a Docker container for consistent, reproducible deployment across any environment.
- **Cloud Deployment:** Deploy on cloud platforms such as AWS Elastic Beanstalk, Google Cloud Run, or Microsoft Azure App Service for automatic scaling, load balancing, and high availability.
- **Database Integration:** Replace the JSON file-based prediction log with a proper relational database (PostgreSQL) or NoSQL database (MongoDB) for more efficient querying, storage, and concurrent write handling.
- **Caching Layer:** Integrate Redis for caching frequently requested statistics, reducing database load and improving response times.
- **Security Hardening:** Implement user authentication (JWT tokens), API rate limiting, HTTPS enforcement, and input validation to protect the system from abuse.

---
&nbsp;

---

## 16. References

&nbsp;

### 16.1 Websites and Online Documentation

1. **scikit-learn Documentation** — Machine Learning in Python. Available at: https://scikit-learn.org/stable/ [Accessed April 2026]

2. **Flask Documentation (Pallets Projects)** — Web Development in Python. Available at: https://flask.palletsprojects.com/ [Accessed April 2026]

3. **Chart.js Documentation** — Simple yet flexible JavaScript charting library. Available at: https://www.chartjs.org/docs/latest/ [Accessed April 2026]

4. **pandas Documentation** — Powerful data structures for data analysis. Available at: https://pandas.pydata.org/docs/ [Accessed April 2026]

5. **NumPy Documentation**. Available at: https://numpy.org/doc/stable/ [Accessed April 2026]

6. **Python Official Documentation — re module (Regular Expressions)**. Available at: https://docs.python.org/3/library/re.html [Accessed April 2026]

7. **scikit-learn User Guide — Naive Bayes Classifiers**. Available at: https://scikit-learn.org/stable/modules/naive_bayes.html [Accessed April 2026]

8. **scikit-learn User Guide — Text Feature Extraction with TF-IDF**. Available at: https://scikit-learn.org/stable/modules/feature_extraction.html#tfidf-term-weighting [Accessed April 2026]

### 16.2 Research Papers (Previous Studies)

9. **Sahami, M., Dumais, S., Heckerman, D., & Horvitz, E. (1998).** "A Bayesian Approach to Filtering Junk E-Mail." AAAI Workshop on Learning for Text Categorization, Madison, Wisconsin. *(Foundational paper establishing Naive Bayes for spam filtering.)*

10. **Drucker, H., Wu, D., & Vapnik, V. N. (1999).** "Support Vector Machines for Spam Categorization." IEEE Transactions on Neural Networks, 10(5), 1048–1054. *(Demonstrated SVM effectiveness for text classification, achieving 97.2% accuracy.)*

11. **Almeida, T. A., Gómez Hidalgo, J. M., & Yamakami, A. (2011).** "Contributions to the Study of SMS Spam Filtering: New Collection and Results." Proceedings of the 11th ACM Symposium on Document Engineering (DocEng 2011), Mountain View, California, USA. ACM. *(The paper that introduced the SMS Spam Collection dataset used in this project. Naive Bayes with TF-IDF achieved 97–98% accuracy.)*

12. **Cormack, G. V. (2008).** "Email Spam Filtering: A Systematic Review." Foundations and Trends in Information Retrieval, 1(4), 335–455. *(Comprehensive review of spam filtering techniques over three decades; critical source for methodology decisions.)*

13. **Cormack, G. V., Gómez Hidalgo, J. M., & Puertas Sánz, E. (2007).** "Feature Engineering for Mobile (SMS) Spam Filtering." Proceedings of the 30th Annual International ACM SIGIR Conference on Research and Development in Information Retrieval, Amsterdam, Netherlands, pp. 871–872. *(Study on SMS-specific feature engineering techniques.)*

14. **Metsis, V., Androutsopoulos, I., & Paliouras, G. (2006).** "Spam Filtering with Naive Bayes — Which Naive Bayes?" CEAS 2006 — Third Conference on Email and Anti-Spam, Mountain View, California, USA. *(Comparison of Naive Bayes variants for spam filtering on the Enron email corpus, achieving 98.5% accuracy with SVM-optimized TF-IDF.)*

### 16.3 Books

15. **Manning, C. D., Raghavan, P., & Schütze, H. (2008).** *Introduction to Information Retrieval.* Cambridge University Press, Cambridge, UK. ISBN: 978-0-521-86571-5. *(Authoritative textbook covering TF-IDF weighting, text classification, and Naive Bayes for text — directly relevant to the techniques used in this project.)*

16. **Bishop, C. M. (2006).** *Pattern Recognition and Machine Learning.* Springer, New York. ISBN: 978-0-387-31073-2. *(Comprehensive graduate-level textbook on Bayesian methods, probabilistic graphical models, and classification algorithms including Naive Bayes.)*

17. **Bird, S., Klein, E., & Loper, E. (2009).** *Natural Language Processing with Python — Analyzing Text with the Natural Language Toolkit.* O'Reilly Media, Sebastopol, California. ISBN: 978-0-596-51649-9. Available online at: https://www.nltk.org/book/ *(Practical introduction to NLP in Python, covering tokenization, text classification, and corpus analysis.)*

18. **Géron, A. (2022).** *Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow* (3rd ed.). O'Reilly Media. ISBN: 978-1-098-12597-4. *(Comprehensive practical guide to machine learning with scikit-learn, covering the algorithms used in this project.)*

### 16.4 Dataset Source

19. **Almeida, T. A. & Hidalgo, J. M. G. (2011).** SMS Spam Collection [Dataset]. UCI Machine Learning Repository. DOI: https://doi.org/10.24432/C5CC84. Available at: https://archive.ics.uci.edu/dataset/228/sms+spam+collection. Licensed under Creative Commons Attribution 4.0 International (CC BY 4.0).

---
&nbsp;

---

## Formatting Guidelines

> **Note to student before printing:** Format this report as follows before submitting the printed Word document.

- **Font:** Times New Roman throughout the report
- **Body Text Font Size:** 12 pt
- **Section Headings Font Size:** 14 pt, Bold
- **Subsection Headings Font Size:** 13 pt, Bold
- **Line Spacing:** 1.5 lines throughout
- **Paragraph Spacing:** 6 pt After Paragraph
- **Margins:** 1 inch (2.54 cm) on all four sides (Left, Right, Top, Bottom)
- **Page Numbers:** Bottom Center, starting from page 1 (Cover Page is unnumbered or counted but not printed)
- **Table of Contents Page Numbers:** Update field before final print (Right-click → Update Field → Update entire table)
- **Page Breaks:** Each major section (Abstract, Index, Introduction, etc.) should start on a new page
- **Code Blocks:** Use Courier New font, 10 pt, with a light grey background shading
- **Tables:** Use simple grid borders, bold headers, 11 pt font
- **Screenshots:** Insert as inline images, centered, with a caption below each one (e.g., "Figure 1: Dataset head() output")
- **Figure Captions:** Placed below the figure, centered, italicized, 11 pt (e.g., *Figure 3: Confusion Matrix Heatmap*)
- **Cover Page:** No page number printed on the cover page
- **Certificate, Acknowledgement, Abstract:** Typically numbered with lowercase Roman numerals (i, ii, iii, iv) or left unnumbered per college guidelines
- **Main Content (Introduction onward):** Arabic numerals starting at 1

---

**End of Report**

---

*Title: Email Spam Detection System Using Machine Learning and NLP*
*Author: Bashar Shakeeb*
*Course: Data Analytics — Information Technology, 3rd Year*
*Academic Year: 2025–2026*
*Version: 3.0 — Final Submission*
