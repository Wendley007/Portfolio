# 🚀 Wendley.dev - Portfólio

Portfólio pessoal desenvolvido com React, Tailwind CSS e Framer Motion, focado em criar interfaces modernas, responsivas e experiências memoráveis.

## ✨ Funcionalidades Principais

### 🎯 Seções do Portfólio
- **Hero Section**: Apresentação inicial com efeito typewriter e animações de entrada
- **Sobre**: Informações pessoais e profissionais com design interativo
- **Projetos**: Galeria de projetos com cards animados e links para GitHub/demo
- **Certificados**: Exibição de certificações e conquistas acadêmicas
- **Contato**: Múltiplas formas de contato com links diretos

### 🎨 Interface e UX
- **Design Responsivo**: Adaptável a todos os dispositivos (mobile, tablet, desktop)
- **Modo Escuro/Claro**: Toggle automático com persistência no localStorage
- **Animações Suaves**: Implementadas com Framer Motion em todas as seções
- **Navegação Intuitiva**: Menu fixo com indicador de seção ativa
- **Scroll Suave**: Navegação entre seções com animações de transição
- **Loading States**: Spinners de carregamento para componentes lazy-loaded

### 🚀 Performance e Otimização
- **Lazy Loading**: Componentes carregados sob demanda para melhor performance
- **Code Splitting**: Bundle separado por rotas e componentes
- **Image Optimization**: Imagens em formato WebP com lazy loading
- **Font Optimization**: Fontes Poppins pré-carregadas para melhor LCP
- **Compressão**: Assets comprimidos com Brotli para menor tamanho

### 📱 Recursos Avançados
- **PWA Ready**: Manifest.json e configuração para Progressive Web App
- **SEO Otimizado**: Meta tags dinâmicas, Open Graph, Schema.org
- **Acessibilidade**: Navegação por teclado, ARIA labels, contraste adequado
- **Analytics**: Integração com Google Analytics para métricas
- **Formulário de Contato**: Integração com EmailJS para envio de emails

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool rápida e moderna
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Biblioteca de animações avançadas

### Bibliotecas de UI/UX
- **Lucide React** - Ícones modernos e consistentes
- **React Icons** - Biblioteca adicional de ícones
- **Typewriter Effect** - Efeito de digitação no Hero
- **React Simple Typewriter** - Alternativa para efeitos de texto

### Desenvolvimento e Qualidade
- **ESLint** - Linting de código JavaScript/JSX
- **Prettier** - Formatação automática de código
- **Vitest** - Framework de testes unitários
- **Testing Library** - Utilitários para testes de componentes

### SEO e Performance
- **React Helmet** - Gerenciamento de meta tags
- **Vite Plugin Compression** - Compressão de assets
- **Rollup Plugin Visualizer** - Análise de bundle

## 📦 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/Wendley007/portfolio.git
cd portfolio
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
# Crie um arquivo .env.local
VITE_EMAILJS_USER_ID=seu_user_id
VITE_EMAILJS_SERVICE_ID=seu_service_id
VITE_EMAILJS_TEMPLATE_ID=seu_template_id
VITE_GA_TRACKING_ID=seu_ga_tracking_id
```

4. Execute o projeto:
```bash
npm run dev
```

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento
npm run preview      # Preview da build de produção

# Build e Deploy
npm run build        # Gera build de produção

# Testes
npm run test         # Executa testes unitários
npm run test:ui      # Interface visual para testes
npm run test:coverage # Testes com relatório de cobertura

# Qualidade de Código
npm run lint         # Verifica problemas de linting
npm run lint:fix     # Corrige problemas de linting automaticamente
npm run format       # Formata código com Prettier
npm run format:check # Verifica formatação do código
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── About.jsx       # Seção Sobre - Informações pessoais
│   ├── Certificates.jsx # Seção Certificados - Certificações
│   ├── Contact.jsx     # Seção Contato - Formulário e links
│   ├── Footer.jsx      # Rodapé - Links sociais e copyright
│   ├── Header.jsx      # Cabeçalho - Navegação e tema
│   ├── Hero.jsx        # Seção Hero - Apresentação inicial
│   ├── LoadingSpinner.jsx # Spinner de carregamento
│   ├── MobileMenu.jsx  # Menu mobile responsivo
│   ├── Projects.jsx    # Seção Projetos - Galeria de trabalhos
│   ├── ScrollToTop.jsx # Botão voltar ao topo
│   └── ThunderCanvas.jsx # Canvas animado de fundo
├── contexts/           # Contextos React
│   └── ThemeContext.jsx # Contexto de tema (dark/light)
├── pages/              # Páginas
│   └── Home.jsx        # Página principal com lazy loading
├── utils/              # Utilitários
│   ├── analytics.js    # Configuração de Google Analytics
│   └── test-utils.jsx  # Utilitários para testes
├── assets/             # Imagens e recursos
│   ├── perfil2.webp    # Foto de perfil desktop
│   ├── perfilMobile.webp # Foto de perfil mobile
│   ├── profile.webp    # Foto de perfil geral
│   ├── projeto1.webp   # Screenshot projeto 1
│   └── projeto2.webp   # Screenshot projeto 2
└── test/               # Configurações de teste
    └── setup.js        # Setup do ambiente de testes
```

## 🎨 Características de Design

### Paleta de Cores
- **Primária**: Gradientes roxo/vermelho para destaque
- **Secundária**: Tons de cinza para texto e fundos
- **Acentos**: Branco/preto para contraste
- **Suporte Dark Mode**: Cores adaptadas para modo escuro

### Tipografia
- **Fonte Principal**: Poppins (Regular, Medium, SemiBold, Bold)
- **Hierarquia**: Títulos grandes, subtítulos médios, texto corpo
- **Responsividade**: Tamanhos adaptáveis por breakpoint

### Animações
- **Entrada de Elementos**: Fade in com movimento suave
- **Hover Effects**: Transições suaves em interações
- **Scroll Animations**: Elementos animam conforme scroll
- **Typewriter**: Efeito de digitação no Hero
- **Stagger Effects**: Animações sequenciais em listas

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Netlify
1. Conecte seu repositório ao Netlify
2. Configure as variáveis de ambiente
3. Build command: `npm run build`
4. Publish directory: `dist`

## 📊 Métricas de Performance

O projeto está otimizado para performance com:
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1
- **Bundle Size**: Otimizado com code splitting
- **Image Loading**: Lazy loading e formatos otimizados

## 🎯 Funcionalidades Específicas

### Hero Section
- Efeito typewriter com delay otimizado para LCP
- Imagens responsivas (desktop/mobile)
- Gradientes e overlays visuais
- Botões de call-to-action

### Navegação
- Menu fixo com backdrop blur
- Indicador de seção ativa
- Menu mobile com animações
- Scroll suave entre seções

### Projetos
- Cards com hover effects
- Links para GitHub e demo
- Badges de tecnologias
- Informações de data e equipe

### Contato
- Links diretos para WhatsApp, LinkedIn, GitHub
- Integração com EmailJS
- Ícones interativos
- Informações de localização

## 🎨 Customização

### Cores
As cores principais podem ser alteradas no arquivo `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#fdf4ff',
        500: '#a855f7',
        600: '#9333ea',
      }
    }
  }
}
```

### Conteúdo
- **Projetos**: Edite o array `projects` em `Projects.jsx`
- **Certificados**: Edite o array `certificates` em `Certificates.jsx`
- **Informações pessoais**: Atualize em `About.jsx` e `Hero.jsx`
- **Contatos**: Modifique `contactInfo` em `Contact.jsx`

## 📱 PWA

O projeto está configurado como PWA com:
- Manifest.json para instalação
- Service worker para cache offline
- Ícones em diferentes tamanhos
- Tema color personalizado

## 🔍 SEO

Otimizações implementadas:
- Meta tags dinâmicas com React Helmet
- Open Graph para redes sociais
- Schema.org para rich snippets
- Sitemap.xml
- Robots.txt
- URLs canônicas
- Structured data para pessoa

## 🧪 Testes

O projeto inclui:
- Testes unitários com Vitest
- Testing Library para testes de componentes
- Cobertura de código
- Setup de ambiente de testes

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

- **Email**: wsanttossttreett@gmail.com
- **LinkedIn**: [Wendley Santos](https://www.linkedin.com/in/wendley-santos-248159219/)
- **GitHub**: [@Wendley007](https://github.com/Wendley007)
- **WhatsApp**: (38) 99927-2911

---

⭐ Se este projeto te ajudou, considere dar uma estrela! 