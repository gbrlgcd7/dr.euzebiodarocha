/* ============================================================
 * DADOS DO PROFISSIONAL - EDITE AQUI PARA PERSONALIZAR
 * Altere os dados abaixo para gerar versões personalizadas
 * ============================================================ */
const data = {
  /* --- Informações Básicas --- */
  nome: "Dr. Euzébio da Rocha",
  especialidade: "Implantodontia & Estética Dental",
  cro: "CRO-SC · Especialista em Implantodontia",
  descricaoHero:
    "Implantes dentários e tratamentos estéticos com planejamento individualizado, resultado natural e acompanhamento completo.",

  // WHATSAPP
  whatsapp: "543634645743643",
  whatsappMensagem:
    "Olá, vim pelo site e gostaria de agendar uma avaliação.",

  // IMAGENS (trocar depois se quiser)
  heroImage: "https://i.pinimg.com/1200x/a1/cf/67/a1cf6767574a5799e52fb7fa99658857.jpg",
  doctorImage: "assets/dreuzebiodarocha.png",

  // SOBRE
  sobre: {
    titulo: "Cuidado especializado em cada etapa do tratamento",
    texto:
      "Com formação avançada em Implantodontia e Estética Dental, cada tratamento é planejado de forma individualizada — você entende cada etapa antes de começar, com clareza e segurança para tomar a melhor decisão.",
    complemento:
      "Estrutura moderna, técnica precisa e foco total no resultado estético e funcional que você merece.",
  },

  // RESULTADOS
  resultados: [
    {
      imagem: "https://i.pinimg.com/1200x/80/7b/cc/807bccedf815a4f1774f449a29941d9b.jpg",
      descricao: "Antes e depois de implante dentário",
    },
    {
      imagem: "https://i.pinimg.com/1200x/4e/a0/81/4ea081c6ea77fb0cb0432e600f64c861.jpg",
      descricao: "Resultado estético com naturalidade",
    },
    {
      imagem: "https://i.pinimg.com/736x/11/22/23/112223af4dab599b6e4666fa48fa190b.jpg",
      descricao: "Transformação real de sorriso",
    },
  ],

  // SERVIÇOS
  servicos: [
    {
      titulo: "Implantes Dentários",
      descricao:
        "Reabilitação oral com osseointegração segura e estética natural.",
    },
    {
      titulo: "Estética Dental",
      descricao:
        "Facetas, lentes de contato e clareamento para um sorriso harmônico.",
    },
    {
      titulo: "Próteses Dentárias",
      descricao:
        "Recuperação funcional e estética com materiais de alta qualidade.",
    },
    {
      titulo: "Manutenção & Prevenção",
      descricao:
        "Profilaxia, orientação e cuidados para preservar seu resultado.",
    },
  ],

  // DIFERENCIAIS
  diferenciais: [
    {
      titulo: "Planejamento detalhado",
      descricao:
        "Você entende cada etapa antes de iniciar qualquer procedimento.",
    },
    {
      titulo: "Atendimento personalizado",
      descricao:
        "Cada caso é único. O tratamento é feito sob medida para você.",
    },
    {
      titulo: "Resultados naturais",
      descricao:
        "Estética e harmonia que se integram ao seu sorriso.",
    },
    {
      titulo: "Estrutura moderna",
      descricao:
        "Equipamentos atuais para mais precisão, conforto e segurança.",
    },
  ],

  // COMO FUNCIONA
  processo: [
    {
      titulo: "Avaliação",
      descricao:
        "Análise detalhada do seu caso, ouvindo suas expectativas e necessidades.",
    },
    {
      titulo: "Planejamento",
      descricao:
        "Definição do protocolo ideal, com clareza sobre etapas, prazo e investimento.",
    },
    {
      titulo: "Procedimento",
      descricao:
        "Execução com técnica avançada, conforto e total segurança.",
    },
    {
      titulo: "Acompanhamento",
      descricao:
        "Suporte contínuo para garantir o melhor resultado a longo prazo.",
    },
  ],

  // LOCALIZAÇÃO
  endereco: "Rua Uruguai, 233 — Centro",
  cidade: "Itajaí — SC",
  mapaEmbed:
    "https://maps.google.com/maps?q=Rua+Uruguai,+233,+Itaja%C3%AD,+SC&output=embed",

  // CTA FINAL
  ctaFinal: {
    titulo: "Pronto para transformar seu sorriso?",
    subtitulo:
      "Agende sua avaliação sem compromisso. Entenda o tratamento ideal para o seu caso com quem tem formação, experiência e resultado comprovado.",
    botao: "Falar no WhatsApp agora",
  },
};

/* ============================================================
 * RENDERIZAÇÃO AUTOMÁTICA - NÃO PRECISA EDITAR ABAIXO
 * ============================================================ */
(function() {
  const waUrl = "https://wa.me/" + data.whatsapp + "?text=" + encodeURIComponent(data.whatsappMensagem);

  // Nav
  document.getElementById("nav-nome").textContent = data.nome;
  document.getElementById("nav-wa").href = waUrl;

  // Hero
  document.getElementById("hero-img").src = data.heroImage;
  document.getElementById("hero-img").alt = data.nome;
  document.getElementById("hero-especialidade").textContent = data.especialidade;
  document.getElementById("hero-nome").textContent = data.nome;
  document.getElementById("hero-descricao").textContent = data.descricaoHero;
  document.getElementById("hero-cro").textContent = data.cro;
  document.getElementById("hero-wa").href = waUrl;

  // Resultados
  const resultsGrid = document.getElementById("results-grid");
  data.resultados.forEach(function(r) {
    resultsGrid.innerHTML += '<div class="result-card"><div style="overflow:hidden"><img src="' + r.imagem + '" alt="' + r.descricao + '" loading="lazy"></div><p class="label">' + r.descricao + '</p></div>';
  });

  // Sobre
  document.getElementById("sobre-titulo").textContent = data.sobre.titulo;
  document.getElementById("sobre-texto").textContent = data.sobre.texto;
  document.getElementById("sobre-complemento").textContent = data.sobre.complemento;
  document.getElementById("sobre-wa").href = waUrl;
  document.getElementById("doctor-img").src = data.doctorImage;
  document.getElementById("doctor-img").alt = data.nome;

  // Serviços
  const servicesGrid = document.getElementById("services-grid");
data.servicos.forEach(function(s) {
  servicesGrid.innerHTML += `
    <div class="card" style="text-align:left">
      <h3 class="service-title">${s.titulo}</h3>
      <p class="service-desc">${s.descricao}</p>
    </div>
  `;
});

  // Diferenciais
  const diffGrid = document.getElementById("diff-grid");
data.diferenciais.forEach(function(d) {
  diffGrid.innerHTML += `
    <div class="text-center">
      <h3 class="diff-title">${d.titulo}</h3>
      <p class="diff-desc">${d.descricao}</p>
    </div>
  `;
});
  // Processo
  const processGrid = document.getElementById("process-grid");
data.processo.forEach(function(p) {
  processGrid.innerHTML += `
    <div class="text-center">
      <h3 class="step-title">${p.titulo}</h3>
      <p class="step-desc">${p.descricao}</p>
    </div>
  `;
});

  // Localização
  document.getElementById("loc-endereco").textContent = data.endereco;
  document.getElementById("loc-cidade").textContent = data.cidade;
  document.getElementById("loc-mapa").src = data.mapaEmbed;

  // CTA
  document.getElementById("cta-titulo").textContent = data.ctaFinal.titulo;
  document.getElementById("cta-subtitulo").textContent = data.ctaFinal.subtitulo;
  document.getElementById("cta-wa").href = waUrl;

  // Footer
  document.getElementById("footer-nome").textContent = data.nome;
  document.getElementById("footer-sub").textContent = data.especialidade + " · " + data.cro;
  document.getElementById("footer-wa").href = waUrl;
  document.getElementById("footer-copy").textContent = "© " + new Date().getFullYear() + " " + data.nome + ". Todos os direitos reservados.";

  // Floating
  document.getElementById("floating-wa").href = waUrl;

  // Title
  document.title = data.nome + " | " + data.especialidade;
})();
