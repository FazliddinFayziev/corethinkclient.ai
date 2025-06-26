import {
  Gavel,
  Store,
  Factory,
  Security,
  Computer,
  FlightTakeoff,
  AccountBalance,
  MedicalServices,
} from '@mui/icons-material';

// Healthcare & Life Sciences
import diagnosis from "./assets/Differential Diagnosis.jpg";
import clinical_design from "./assets/Clinical Trial Design.jpg";
import drug from "./assets/Drug Interaction Checks.jpg";

// Finance & Banking
import fraud_detection from "./assets/Fraud Detection.jpg";
import compliance from "./assets/Regulatory Compliance.jpg";
import stock_history from "./assets/Stock History Retrieval.jpg";

// Legal & Governance
import legal_argument from "./assets/Legal Argumentation.jpg";
import contract_risk from "./assets/Contract Risk Review.jpg";
import case_law from "./assets/Case Law Summarization.jpg";

// Manufacturing & Energy
import root_cause from "./assets/Root Cause Analysis.jpg";
import process_optimization from "./assets/Process Optimization.jpg";
import grid_failure from "./assets/Grid Failure Forecasting.jpg";

// Retail & E-Commerce
import dynamic_price from "./assets/Dynamic Pricing.jpg";
import sentiment_root from "./assets/Sentiment Root Cause Analysis.jpg";
import inventory_check from "./assets/Inventory Check.jpg";

// Logistics & Travel
import supply_chain from "./assets/Supply Chain Forecasting.jpg";
import rebooking from "./assets/Rebooking During Disruptions.jpg";
import uncertain_routing from "./assets/Uncertain Routing.jpg"; 

// AI Infra & Cybersecurity
import red_team from "./assets/Red Team Simulation.jpg";
import vulnerability from "./assets/Vulnerability Triage.jpg";
import multi_agent from "./assets/Multi-Agent Debugging.jpg";

// IT
import code_generation from "./assets/Code Generation & Refactoring.jpg";
import ai_agents from "./assets/AI Agent Orchestration.jpg";
import iac_validation from "./assets/Infrastructure as Code Validation.jpg";

export const useCaseData = [
  {
    category: 'Healthcare & Life Sciences',
    icon: <MedicalServices fontSize="small" />,
    cases: [
      {
        title: 'Differential Diagnosis',
        desc: 'Reason over symptoms, history & test results to infer likely conditions.',
        image: diagnosis,
      },
      {
        title: 'Clinical Trial Design',
        desc: 'Balance statistical, legal, and medical constraints for robust trial protocols.',
        image: clinical_design,
      },
      {
        title: 'Drug Interaction Checks',
        desc: 'Query APIs for interaction data across patient prescriptions.',
        image: drug,
      }
    ]
  },
  {
    category: 'Finance & Banking',
    icon: <AccountBalance fontSize="small" />,
    cases: [
      {
        title: 'Fraud Detection',
        desc: 'Spot novel fraud patterns using causal and analogical reasoning.',
        image: fraud_detection,
      },
      {
        title: 'Regulatory Compliance',
        desc: 'Interpret cross-border regulations and align financial operations.',
        image: compliance,
      },
      {
        title: 'Stock History Retrieval',
        desc: 'Access time-series data to support investment logic.',
        image: stock_history,
      }
    ]
  },
  {
    category: 'Legal & Governance',
    icon: <Gavel fontSize="small" />,
    cases: [
      {
        title: 'Legal Argumentation',
        desc: 'Build and refute arguments using precedent, logic, and hypotheticals.',
        image: legal_argument,
      },
      {
        title: 'Contract Risk Review',
        desc: 'Find latent risks and obligations in legal language.',
        image: contract_risk,
      },
      {
        title: 'Case Law Summarization',
        desc: 'Search and synthesize relevant legal precedents for arguments.',
        image: case_law,
      }
    ]
  },
  {
    category: 'Manufacturing & Energy',
    icon: <Factory fontSize="small" />,
    cases: [
      {
        title: 'Root Cause Analysis',
        desc: 'Trace multi-step system failures across sensors and logs.',
        image: root_cause,
      },
      {
        title: 'Process Optimization',
        desc: 'Optimize high-dimensional processes under uncertainty.',
        image: process_optimization,
      },
      {
        title: 'Grid Failure Forecasting',
        desc: 'Predict cascading failures from environmental & demand signals.',
        image: grid_failure,
      }
    ]
  },
  {
    category: 'Retail & E-Commerce',
    icon: <Store fontSize="small" />,
    cases: [
      {
        title: 'Dynamic Pricing',
        desc: 'Adapt prices based on competition, demand, and segmentation.',
        image: dynamic_price,
      },
      {
        title: 'Sentiment Root Cause Analysis',
        desc: 'Find underlying drivers of customer feedback trends.',
        image: sentiment_root,
      },
      {
        title: 'Inventory Check',
        desc: 'Use API calls to verify real-time stock availability.',
        image: inventory_check,
      }
    ]
  },
  {
    category: 'Logistics & Travel',
    icon: <FlightTakeoff fontSize="small" />,
    cases: [
      {
        title: 'Supply Chain Forecasting',
        desc: 'Model disruption impact across suppliers, routes, and policies.',
        image: supply_chain,
      },
      {
        title: 'Rebooking During Disruptions',
        desc: 'Resolve conflicts from weather, strikes, or system failures in real time.',
        image: rebooking,
      },
      {
        title: 'Uncertain Routing',
        desc: 'Make adaptive routing decisions based on dynamic constraints.',
        image: uncertain_routing,
      }
    ]
  },
  {
    category: 'AI Infra & Cybersecurity',
    icon: <Security fontSize="small" />,
    cases: [
      {
        title: 'Red Team Simulation',
        desc: 'Model strategic adversaries and probe system defenses.',
        image: red_team,
      },
      {
        title: 'Vulnerability Triage',
        desc: 'Map CVEs to specific risks within your architecture.',
        image: vulnerability,
      },
      {
        title: 'Multi-Agent Debugging',
        desc: 'Trace logic failures in agent teams with conflicting local goals.',
        image: multi_agent,
      }
    ]
  },
  {
  category: 'IT',
  icon: <Computer fontSize="small" />, 
  cases: [
    {
      title: 'Code Generation & Refactoring',
      desc: 'Automatically generate boilerplate code or refactor existing codebases with AI assistance.',
      image: code_generation,
    },
    {
      title: 'AI Agent Orchestration',
      desc: 'Coordinate multiple AI agents to complete complex technical workflows autonomously.',
      image: ai_agents, 
    },
    {
      title: 'Infrastructure as Code Validation',
      desc: 'Analyze and validate Terraform/CloudFormation templates for security and efficiency.',
      image: iac_validation, 
    }
  ]
}
];