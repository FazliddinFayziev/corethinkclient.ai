import {
  MedicalServices,
  AccountBalance,
  Gavel,
  Factory,
  Store,
  FlightTakeoff,
  Security
} from '@mui/icons-material';

// Healthcare & Life Sciences
import diagnosis from "./assets/Differential Diagnosis.jpg";
import clinical_design from "./assets/Clinical Trial Design.jpg";
import drug from "./assets/Drug Interaction Checks.jpg";

export const useCaseData = [
  {
    category: 'Healthcare & Life Sciences',
    icon: <MedicalServices fontSize="small" />,
    cases: [
      {
        title: 'Differential Diagnosis',
        desc: 'Reason over symptoms, history & test results to infer likely conditions.',
        image: diagnosis
      },
      {
        title: 'Clinical Trial Design',
        desc: 'Balance statistical, legal, and medical constraints for robust trial protocols.',
        image: clinical_design
      },
      {
        title: 'Drug Interaction Checks',
        desc: 'Query APIs for interaction data across patient prescriptions.',
        image: drug
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
        image: '/images/use-cases/fraud-detection.jpg'
      },
      {
        title: 'Regulatory Compliance',
        desc: 'Interpret cross-border regulations and align financial operations.',
        image: '/images/use-cases/compliance.jpg'
      },
      {
        title: 'Stock History Retrieval',
        desc: 'Access time-series data to support investment logic.',
        image: '/images/use-cases/stock-market.jpg'
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
        image: '/images/use-cases/legal-argument.jpg'
      },
      {
        title: 'Contract Risk Review',
        desc: 'Find latent risks and obligations in legal language.',
        image: '/images/use-cases/contract-review.jpg'
      },
      {
        title: 'Case Law Summarization',
        desc: 'Search and synthesize relevant legal precedents for arguments.',
        image: '/images/use-cases/case-law.jpg'
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
        image: '/images/use-cases/root-cause.jpg'
      },
      {
        title: 'Process Optimization',
        desc: 'Optimize high-dimensional processes under uncertainty.',
        image: '/images/use-cases/process-optimization.jpg'
      },
      {
        title: 'Grid Failure Forecasting',
        desc: 'Predict cascading failures from environmental & demand signals.',
        image: '/images/use-cases/grid-failure.jpg'
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
        image: '/images/use-cases/dynamic-pricing.jpg'
      },
      {
        title: 'Sentiment Root Cause Analysis',
        desc: 'Find underlying drivers of customer feedback trends.',
        image: '/images/use-cases/sentiment-analysis.jpg'
      },
      {
        title: 'Inventory Check',
        desc: 'Use API calls to verify real-time stock availability.',
        image: '/images/use-cases/inventory.jpg'
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
        image: '/images/use-cases/supply-chain.jpg'
      },
      {
        title: 'Rebooking During Disruptions',
        desc: 'Resolve conflicts from weather, strikes, or system failures in real time.',
        image: '/images/use-cases/rebooking.jpg'
      },
      {
        title: 'Uncertain Routing',
        desc: 'Make adaptive routing decisions based on dynamic constraints.',
        image: '/images/use-cases/routing.jpg'
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
        image: '/images/use-cases/red-team.jpg'
      },
      {
        title: 'Vulnerability Triage',
        desc: 'Map CVEs to specific risks within your architecture.',
        image: '/images/use-cases/vulnerability.jpg'
      },
      {
        title: 'Multi-Agent Debugging',
        desc: 'Trace logic failures in agent teams with conflicting local goals.',
        image: '/images/use-cases/multi-agent.jpg'
      }
    ]
  }
];