# 🚀 Wendley.dev - Portfólio

Portfólio pessoal desenvolvido com React, Tailwind CSS e Framer Motion, focado em criar interfaces modernas, responsivas e experiências memoráveis.

## ✨ Características

- **Design Responsivo**: Adaptável a todos os dispositivos
- **Modo Escuro/Claro**: Toggle automático com persistência
- **Animações Suaves**: Implementadas com Framer Motion
- **SEO Otimizado**: Meta tags, Open Graph, Schema.org
- **Performance**: Lazy loading, compressão de assets
- **Acessibilidade**: Navegação por teclado, ARIA labels
- **Formulário Funcional**: Integração com EmailJS
- **PWA Ready**: Manifest.json e service worker

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool rápida e moderna
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Biblioteca de animações
- **EmailJS** - Serviço de envio de emails
- **React Helmet** - Gerenciamento de meta tags
- **Lucide React** - Ícones modernos

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

## 🔧 Configuração

### EmailJS
1. Crie uma conta em [EmailJS](https://www.emailjs.com/)
2. Configure um serviço de email (Gmail, Outlook, etc.)
3. Crie um template de email
4. Adicione as credenciais no arquivo `.env.local`

### Google Analytics
1. Crie uma propriedade no [Google Analytics](https://analytics.google.com/)
2. Obtenha o ID de rastreamento (G-XXXXXXXXXX)
3. Adicione no arquivo `.env.local`

### Favicons
Substitua os arquivos de favicon na pasta `public/`:
- `favicon-16x16.png`
- `favicon-32x32.png`
- `apple-touch-icon.png`
- `android-chrome-192x192.png`
- `android-chrome-512x512.png`

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── About.jsx       # Seção Sobre
│   ├── Certificates.jsx # Seção Certificados
│   ├── Contact.jsx     # Seção Contato
│   ├── Footer.jsx      # Rodapé
│   ├── Header.jsx      # Cabeçalho
│   ├── Hero.jsx        # Seção Hero
│   ├── LoadingSpinner.jsx # Spinner de carregamento
│   ├── MobileMenu.jsx  # Menu mobile
│   ├── Projects.jsx    # Seção Projetos
│   ├── ScrollToTop.jsx # Botão voltar ao topo
│   └── ThunderCanvas.jsx # Canvas animado
├── contexts/           # Contextos React
│   └── ThemeContext.jsx # Contexto de tema
├── pages/              # Páginas
│   └── Home.jsx        # Página principal
├── utils/              # Utilitários
│   └── analytics.js    # Configuração de analytics
└── assets/             # Imagens e recursos
```

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

## 📊 Performance

O projeto está otimizado para performance com:
- **Lazy Loading**: Componentes carregados sob demanda
- **Compressão**: Assets comprimidos com Brotli
- **Code Splitting**: Bundle separado por rotas
- **Image Optimization**: Imagens em formato WebP
- **Font Optimization**: Fontes pré-carregadas

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

## 📱 PWA

O projeto está configurado como PWA com:
- Manifest.json para instalação
- Service worker para cache offline
- Ícones em diferentes tamanhos
- Tema color personalizado

## 🔍 SEO

Otimizações implementadas:
- Meta tags dinâmicas
- Open Graph para redes sociais
- Schema.org para rich snippets
- Sitemap.xml
- Robots.txt
- URLs canônicas

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