interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const priceFaqDataMap: Record<string, FAQItem[]> = {
  en: [
    {
      id: "item-1",
      question: "What is the cost of the free plan?",
      answer:
        "Our free plan is completely free, with no monthly or annual charges. It's a great way to get started and explore our basic features.",
    },
    {
      id: "item-2",
      question: "How much does the Pro Monthly plan cost?",
      answer:
        "The Pro Monthly plan is priced at $30 per month. It provides access to our core features and is billed on a monthly basis.",
    },
    {
      id: "item-3",
      question: "What is the price of the Business Monthly plan?",
      answer:
        "The Business Monthly plan is available for $60 per month. It offers advanced features and is billed on a monthly basis for added flexibility.",
    },
    {
      id: "item-4",
      question: "Do you offer any annual subscription plans?",
      answer:
        "Yes, we offer annual subscription plans for even more savings. The Pro Annual plan is $288 per year, and the Business Annual plan is $600 per year.",
    },
    {
      id: "item-5",
      question: "Is there a trial period for the paid plans?",
      answer:
        "We offer a 14-day free trial for both the Pro Monthly and Pro Annual plans. It's a great way to experience all the features before committing to a paid subscription.",
    },
  ],
  "pt-BR": [
    {
      id: "item-1",
      question: "Qual é o custo do plano gratuito?",
      answer:
        "Nosso plano gratuito é completamente gratuito, sem cobranças mensais ou anuais. É uma ótima maneira de começar e explorar nossos recursos básicos.",
    },
    {
      id: "item-2",
      question: "Quanto custa o plano Pro Mensal?",
      answer:
        "O plano Pro Mensal custa $30 por mês. Ele fornece acesso aos nossos recursos principais e é cobrado mensalmente.",
    },
    {
      id: "item-3",
      question: "Qual é o preço do plano Business Mensal?",
      answer:
        "O plano Business Mensal está disponível por $60 por mês. Ele oferece recursos avançados e é cobrado mensalmente para maior flexibilidade.",
    },
    {
      id: "item-4",
      question: "Vocês oferecem planos de assinatura anual?",
      answer:
        "Sim, oferecemos planos de assinatura anual para ainda mais economia. O plano Pro Anual custa $288 por ano e o plano Business Anual custa $600 por ano.",
    },
    {
      id: "item-5",
      question: "Existe um período de teste para os planos pagos?",
      answer:
        "Oferecemos um teste gratuito de 14 dias para os planos Pro Mensal e Pro Anual. É uma ótima maneira de experimentar todos os recursos antes de se comprometer com uma assinatura paga.",
    },
  ],  
};
