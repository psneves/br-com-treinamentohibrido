import { env } from "~/env.mjs";

interface SubscriptionPlanTranslation {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  limitations: string[];
  prices: {
    monthly: number;
    yearly: number;
  };
  stripeIds: {
    monthly: string | null;
    yearly: string | null;
  };
}

export const priceDataMap: Record<string, SubscriptionPlanTranslation[]> = {  
  en: [
    {
      id: "starter",
      title: "Starter",
      description: "For Beginners",
      benefits: [
        "Up to 1 cluster per month",
        "Basic analytics and reporting",
        "Access to basic features",
      ],
      limitations: [
        "No priority access to new features",
        "Limited customer support",
        "No custom branding",
        "Limited access to business resources",
      ],
      prices: {
        monthly: 0,
        yearly: 0,
      },
      stripeIds: {
        monthly: null,
        yearly: null,
      },
    },
    {
      id: "pro",
      title: "Pro",
      description: "Unlock Advanced Features",
      benefits: [
        "Up to 3 clusters per month",
        "Advanced analytics and reporting",
        "Access to business templates",
        "Priority customer support",
        "Exclusive webinars and training",
      ],
      limitations: [
        "No custom branding",
        "Limited access to business resources",
      ],
      prices: {
        monthly: 30,
        yearly: 288,
      },
      stripeIds: {
        monthly: env.NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PRICE_ID,
        yearly: env.NEXT_PUBLIC_STRIPE_PRO_YEARLY_PRICE_ID,
      },
    },
    {
      id: "business",
      title: "Business",
      description: "For Power Users",
      benefits: [
        "Up to 10 clusters per month",
        "Real-time analytics and reporting",
        "Access to all templates, including custom branding",
        "24/7 business customer support",
        "Personalized configuration and account management",
      ],
      limitations: [],
      prices: {
        monthly: 60,
        yearly: 600,
      },
      stripeIds: {
        monthly: env.NEXT_PUBLIC_STRIPE_BUSINESS_MONTHLY_PRICE_ID,
        yearly: env.NEXT_PUBLIC_STRIPE_BUSINESS_YEARLY_PRICE_ID,
      },
    },
  ],  
  'pt-BR': [
    {
      id: "starter",
      title: "Iniciante",
      description: "Para Iniciantes",
      benefits: [
        "Até 1 cluster por mês",
        "Análises e relatórios básicos",
        "Acesso a recursos básicos",
      ],
      limitations: [
        "Sem acesso prioritário a novos recursos",
        "Suporte ao cliente limitado",
        "Sem personalização de marca",
        "Acesso limitado a recursos empresariais",
      ],
      prices: {
        monthly: 0,
        yearly: 0,
      },
      stripeIds: {
        monthly: null,
        yearly: null,
      },
    },
    {
      id: "pro",
      title: "Pro",
      description: "Desbloqueie Recursos Avançados",
      benefits: [
        "Até 3 clusters por mês",
        "Análises e relatórios avançados",
        "Acesso a modelos empresariais",
        "Suporte prioritário ao cliente",
        "Webinars e treinamentos exclusivos",
      ],
      limitations: [
        "Sem personalização de marca",
        "Acesso limitado a recursos empresariais",
      ],
      prices: {
        monthly: 30,
        yearly: 288,
      },
      stripeIds: {
        monthly: env.NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PRICE_ID,
        yearly: env.NEXT_PUBLIC_STRIPE_PRO_YEARLY_PRICE_ID,
      },
    },
    {
      id: "business",
      title: "Business",
      description: "Para Usuários Avançados",
      benefits: [
        "Até 10 clusters por mês",
        "Análises e relatórios em tempo real",
        "Acesso a todos os modelos, incluindo personalização de marca",
        "Suporte ao cliente empresarial 24/7",
        "Configuração e gerenciamento de conta personalizados",
      ],
      limitations: [],
      prices: {
        monthly: 60,
        yearly: 600,
      },
      stripeIds: {
        monthly: env.NEXT_PUBLIC_STRIPE_BUSINESS_MONTHLY_PRICE_ID,
        yearly: env.NEXT_PUBLIC_STRIPE_BUSINESS_YEARLY_PRICE_ID,
      },
    },
  ],
  
};
