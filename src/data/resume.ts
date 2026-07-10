export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  tools: string[];
  category: 'sql' | 'excel' | 'analytics';
  interactiveData?: any;
}

export interface Internship {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface ResumeData {
  personal: {
    name: string;
    role: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    linkedinUrl: string;
    github?: string;
  };
  summary: string;
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
  skills: {
    category: string;
    items: { name: string; level: 'Expert' | 'Advanced' | 'Intermediate' | 'Basic'; desc?: string }[];
  }[];
  internships: Internship[];
  projects: Project[];
  certifications: string[];
  education: Education[];
}

export const resumeData: ResumeData = {
  personal: {
    name: "Khushi Omar",
    role: "Aspiring Data Analyst",
    email: "khushiomar96@gmail.com",
    phone: "6306925459",
    location: "Mathura, India (Near NH 2 Highway)",
    linkedin: "linkedin.com/in/khushi-omar-280677383",
    linkedinUrl: "https://linkedin.com/in/khushi-omar-280677383",
  },
  summary: "Detail-oriented aspiring Data Analyst with hands-on experience in exploratory data analysis, large dataset cleaning and processing, and SQL querying across 11+ relational tables. Proficient in developing Excel dashboards to visualize KPIs and translate business requirements into actionable insights. Possesses a keen analytical mindset with strong aptitude for identifying trends, patterns, and anomalies. Seeking a Data Analyst or Business Analyst role to drive impact with data-driven decision making.",
  stats: [
    {
      label: "SQL DB Depth",
      value: "11+ Tables",
      description: "Relational table structures queried with complex joins and subqueries"
    },
    {
      label: "Custom Queries",
      value: "20+",
      description: "Optimized SQL queries leveraging GROUP BY, JOINs, and CTE aggregates"
    },
    {
      label: "Formulas & Tools",
      value: "Advanced",
      description: "Proficient in Pivot Tables, VLOOKUP, KPI Dashboards, and Power BI"
    },
    {
      label: "Academic Focus",
      value: "BBA '26",
      description: "Bachelor of Business Administration aligning data with business outcomes"
    }
  ],
  skills: [
    {
      category: "Data Analysis & Reporting",
      items: [
        { name: "Exploratory Data Analysis (EDA)", level: "Advanced", desc: "Discovering patterns and trends in raw business datasets" },
        { name: "KPI Dashboard Design", level: "Advanced", desc: "Visualizing high-level business indicators clearly for stakeholders" },
        { name: "CSV Handling & Processing", level: "Advanced", desc: "Parsing, sanitizing, and validating external comma-separated data streams" },
        { name: "Pivot Tables & VLOOKUP", level: "Advanced", desc: "Synthesizing cross-dimensional metrics and quick exact-match lookups" },
        { name: "Advanced Excel Formulas", level: "Advanced", desc: "Nesting logic and math functions to automate calculations" }
      ]
    },
    {
      category: "Database Management",
      items: [
        { name: "SQL Querying", level: "Advanced", desc: "Writing clean, standard statements to retrieve business metrics" },
        { name: "Data Extraction & Filtering", level: "Advanced", desc: "Slicing datasets based on target-rich parameters" },
        { name: "Aggregations & Grouping", level: "Advanced", desc: "Summarizing metrics using SUM, COUNT, AVG, GROUP BY, and HAVING" },
        { name: "Relational Schema Joins", level: "Advanced", desc: "Unifying multi-table structures via INNER, LEFT, RIGHT, and self-joins" },
        { name: "Statistical Analysis", level: "Intermediate", desc: "Identifying distributions, standard deviations, and trend anomalies" }
      ]
    },
    {
      category: "Data Tools & Soft Skills",
      items: [
        { name: "Microsoft Excel", level: "Advanced", desc: "Primary toolkit for custom charts, conditional formatting, and models" },
        { name: "Google Sheets", level: "Advanced", desc: "Collaborative workbook tracking and cloud-based sheet models" },
        { name: "Power BI", level: "Basic", desc: "Building base data models and dragging-and-dropping visualization tiles" },
        { name: "Data Storytelling", level: "Advanced", desc: "Translating columns of numbers into actionable business recommendations" },
        { name: "Stakeholder Presentations", level: "Advanced", desc: "Presenting findings and methodology in structured updates" },
        { name: "Problem Solving & QA", level: "Expert", desc: "Meticulous verification of numbers for reporting accuracy" }
      ]
    }
  ],
  internships: [
    {
      role: "Demo Intern",
      company: "Kryoss Software Pvt. Ltd.",
      period: "Feb 2026 – Mar 2026",
      bullets: [
        "Collected business requirements from clients and translated them into structured data tracking tasks using Microsoft Excel; maintained datasets for reporting and quality assurance.",
        "Documented client interaction processes and methodologies; presented progress updates in team meetings, strengthening stakeholder communication skills."
      ]
    }
  ],
  projects: [
    {
      id: "ecommerce-cataloging",
      title: "E-commerce Product Cataloging",
      subtitle: "CSV Data Management & Quality Assurance",
      category: "analytics",
      description: "Collected, cleaned, and processed large CSV datasets from multiple sources; performed exploratory data analysis to identify inconsistencies, patterns, and anomalies in pricing and image data.",
      bullets: [
        "Collected, cleaned, and processed large CSV datasets from multiple sources to synthesize a master product catalogue.",
        "Performed exploratory data analysis to identify inconsistencies, pricing outliers, and missing image metadata.",
        "Performed rigorous quality assurance checks to ensure data accuracy and consistency across sheets.",
        "Developed structured reporting formats to communicate catalog data health and recommendations to stakeholders."
      ],
      tools: ["Microsoft Excel", "CSV Processing", "Exploratory Data Analysis", "Quality Assurance"],
      interactiveData: {
        raw: [
          { sku: "SKU-9021", name: "Classic Cotton Tee", price: "24.99", stock: "140", img: "tee_classic.jpg", status: "Valid" },
          { sku: "SKU-4832", name: "Slim Fit Chino", price: "450.00*", stock: "-10", img: "", status: "Error: Outlier Price / Neg Stock / Missing Image" },
          { sku: "SKU-1094", name: "Hooded Windbreaker", price: "59.99", stock: "45", img: "jacket_wind.jpg", status: "Valid" },
          { sku: "SKU-2384", name: "Leather Chelsea Boot", price: "129.99", stock: "15", img: "boot_chelsea.png", status: "Valid" },
          { sku: "SKU-8843", name: "Premium Canvas Tote", price: "19.99", stock: "280", img: "tote_canvas.jpg", status: "Valid" },
          { sku: "SKU-7731", name: "Wool Knit Beanie", price: "1499.00*", stock: "80", img: "beanie.jpg", status: "Error: Outlier Price" }
        ],
        cleaned: [
          { sku: "SKU-9021", name: "Classic Cotton Tee", price: "24.99", stock: "140", img: "tee_classic.jpg", status: "Resolved: Verified" },
          { sku: "SKU-4832", name: "Slim Fit Chino", price: "45.00", stock: "0", img: "placeholder.jpg", status: "Resolved: Corrected Price, Safe stock, Placeholder added" },
          { sku: "SKU-1094", name: "Hooded Windbreaker", price: "59.99", stock: "45", img: "jacket_wind.jpg", status: "Resolved: Verified" },
          { sku: "SKU-2384", name: "Leather Chelsea Boot", price: "129.99", stock: "15", img: "boot_chelsea.png", status: "Resolved: Verified" },
          { sku: "SKU-8843", name: "Premium Canvas Tote", price: "19.99", stock: "280", img: "tote_canvas.jpg", status: "Resolved: Verified" },
          { sku: "SKU-7731", name: "Wool Knit Beanie", price: "14.99", stock: "80", img: "beanie.jpg", status: "Resolved: Adjusted decimal placement" }
        ]
      }
    },
    {
      id: "music-store-sql",
      title: "Music Store Data Analysis",
      subtitle: "Relational Querying & Aggregate Analytics",
      category: "sql",
      description: "Performed exploratory data analysis on a large relational database (11 tables) using MySQL; wrote 20+ SQL queries with JOINs, GROUP BY, aggregate functions, and subqueries to support statistical analysis.",
      bullets: [
        "Queried a complex relational schema containing 11 tables (including Customer, Invoice, Track, Artist, Album, and Genre) with MySQL Workbench.",
        "Authored 20+ optimized SQL queries using multi-table JOINs, GROUP BY aggregates, and advanced subqueries to surface statistical sales trends.",
        "Generated critical business insights identifying highest-spending customers, top-performing revenue cities, and best-selling music genres/artists.",
        "Synthesized findings into an elegant KPI dashboard using Microsoft Excel to visualize metrics and deliver stakeholder-ready decision-making support."
      ],
      tools: ["MySQL Workbench", "SQL", "Relational Database Joins", "Microsoft Excel", "KPI Dashboards"],
      interactiveData: {
        queries: [
          {
            id: "q1",
            title: "Top 5 Spending Customers",
            query: `SELECT c.customer_id, c.first_name, c.last_name, SUM(i.total) as total_spent\nFROM customer c\nJOIN invoice i ON c.customer_id = i.customer_id\nGROUP BY c.customer_id\nORDER BY total_spent DESC\nLIMIT 5;`,
            results: [
              { customer_id: 5, first_name: "František", last_name: "Wichterlová", total_spent: "$144.54", city: "Prague" },
              { customer_id: 6, first_name: "Helena", last_name: "Holý", total_spent: "$128.62", city: "Prague" },
              { customer_id: 57, first_name: "Luis", last_name: "Rojas", total_spent: "$97.02", city: "Santiago" },
              { customer_id: 3, first_name: "François", last_name: "Tremblay", total_spent: "$94.02", city: "Montréal" },
              { customer_id: 34, first_name: "João", last_name: "Fernandes", total_spent: "$90.00", city: "Lisbon" }
            ],
            chartType: "bar",
            chartData: [
              { label: "František W.", value: 144.54 },
              { label: "Helena H.", value: 128.62 },
              { label: "Luis R.", value: 97.02 },
              { label: "François T.", value: 94.02 },
              { label: "João F.", value: 90.00 }
            ]
          },
          {
            id: "q2",
            title: "Revenue by City (Top Sales Locations)",
            query: `SELECT billing_city, SUM(total) as city_revenue, COUNT(invoice_id) as orders_count\nFROM invoice\nGROUP BY billing_city\nORDER BY city_revenue DESC\nLIMIT 5;`,
            results: [
              { billing_city: "Prague", city_revenue: "$273.16", orders_count: 30 },
              { billing_city: "Mountain View", city_revenue: "$182.16", orders_count: 20 },
              { billing_city: "London", city_revenue: "$166.32", orders_count: 18 },
              { billing_city: "Berlin", city_revenue: "$158.40", orders_count: 17 },
              { billing_city: "Paris", city_revenue: "$151.48", orders_count: 16 }
            ],
            chartType: "pie",
            chartData: [
              { label: "Prague", value: 273.16, percentage: 29 },
              { label: "Mountain View", value: 182.16, percentage: 19 },
              { label: "London", value: 166.32, percentage: 18 },
              { label: "Berlin", value: 158.40, percentage: 17 },
              { label: "Paris", value: 151.48, percentage: 16 }
            ]
          },
          {
            id: "q3",
            title: "Top 5 Best-Selling Artists",
            query: `SELECT ar.name as artist_name, COUNT(il.track_id) as tracks_sold, SUM(il.unit_price * il.quantity) as total_sales\nFROM artist ar\nJOIN album al ON ar.artist_id = al.artist_id\nJOIN track t ON al.album_id = t.album_id\nJOIN invoice_line il ON t.track_id = il.track_id\nGROUP BY ar.artist_id\nORDER BY total_sales DESC\nLIMIT 5;`,
            results: [
              { artist_name: "Iron Maiden", tracks_sold: 140, total_sales: "$138.60" },
              { artist_name: "U2", tracks_sold: 107, total_sales: "$105.93" },
              { artist_name: "Metallica", tracks_sold: 91, total_sales: "$90.09" },
              { artist_name: "Led Zeppelin", tracks_sold: 87, total_sales: "$86.13" },
              { artist_name: "Lost", tracks_sold: 42, total_sales: "$83.58" }
            ],
            chartType: "bar",
            chartData: [
              { label: "Iron Maiden", value: 138.60 },
              { label: "U2", value: 105.93 },
              { label: "Metallica", value: 90.09 },
              { label: "Led Zeppelin", value: 86.13 },
              { label: "Lost", value: 83.58 }
            ]
          }
        ]
      }
    }
  ],
  certifications: [
    "Microsoft Excel for Data Analysis",
    "SQL for Data Analysis / SQL Fundamentals",
    "Business Communication Skills"
  ],
  education: [
    {
      degree: "Bachelor of Business Administration (BBA)",
      institution: "DR Bhimrao Ambedkar University, Agra",
      period: "2023 – 2026",
      details: "Focusing on Business Systems, Financial Reporting, Operations, and Business Analytics."
    },
    {
      degree: "Intermediate Education (CBSE)",
      institution: "St. Xavier's High School",
      period: "2022 – 2023",
      details: "Completed with a focus on commerce, quantitative math, and computer science concepts."
    }
  ]
};
