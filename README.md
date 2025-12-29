# HireUP 🚀

Marketplace de serviços profissionais desenvolvido com Next.js, TypeScript e Tailwind CSS. Conecta clientes com profissionais qualificados em diversas áreas de serviços.

## 📋 Sobre o Projeto

O HireUP é uma plataforma inspirada em marketplaces como Spoton e GetNinjas, que permite aos usuários buscar e contratar profissionais de diferentes áreas. O projeto foi desenvolvido utilizando dados mockados, focando na experiência do usuário e interface moderna.

### Funcionalidades Principais

- 🔍 **Busca de Profissionais**: Campo de busca por nome, profissão ou localização
- 📂 **Filtros por Categoria**: Sistema de categorias com scroll horizontal para facilitar a navegação
- 👤 **Perfis de Profissionais**: Páginas detalhadas com informações completas de cada profissional
- ⭐ **Sistema de Avaliações**: Visualização de avaliações e notas dos profissionais
- 📅 **Seletor de Datas**: Sistema que mostra apenas os dias disponíveis de cada profissional
- 💬 **Solicitação de Serviço**: Formulário para solicitar serviços dos profissionais
- 💰 **Simulação de Gorjetas**: Funcionalidade para enviar gorjetas após a conclusão do serviço

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Next.js 16.1.1** - Framework React com App Router
- **React 19.2.3** - Biblioteca JavaScript para interfaces
- **TypeScript 5** - Superset JavaScript com tipagem estática
- **Tailwind CSS 4** - Framework CSS utility-first

### Fontes
- **Inter** - Fonte principal do projeto (Google Fonts)

### Desenvolvimento
- **ESLint** - Linter para garantir qualidade de código
- **PostCSS** - Processador CSS

## 📁 Estrutura do Projeto

```
hireup/
├── app/                          # App Router do Next.js
│   ├── layout.tsx               # Layout principal
│   ├── page.tsx                 # Página inicial
│   ├── globals.css              # Estilos globais
│   └── professionals/
│       └── [id]/
│           └── page.tsx         # Página de detalhes do profissional
│
├── src/
│   ├── components/              # Componentes reutilizáveis
│   │   ├── Button.tsx          # Componente de botão
│   │   ├── CategoryFilter.tsx  # Filtro de categorias
│   │   ├── DatePicker.tsx      # Seletor de datas
│   │   ├── Footer.tsx          # Rodapé
│   │   ├── ProfessionalCard.tsx # Card de profissional
│   │   ├── Rating.tsx          # Componente de avaliação (estrelas)
│   │   ├── ReviewCard.tsx      # Card de avaliação
│   │   ├── SearchBar.tsx       # Barra de busca
│   │   └── index.ts            # Exports centralizados
│   │
│   ├── mocks/                   # Dados mockados
│   │   └── professionals.ts    # Array de profissionais mockados
│   │
│   └── types/                   # Tipagens TypeScript
│       └── index.ts             # Tipos e interfaces
│
├── public/                      # Arquivos estáticos
├── next.config.ts              # Configuração do Next.js
├── tsconfig.json               # Configuração do TypeScript
├── tailwind.config.js          # Configuração do Tailwind (se houver)
└── package.json                # Dependências do projeto
```

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd hireup
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

### Outros Comandos

```bash
# Build para produção
npm run build

# Iniciar servidor de produção
npm start

# Executar linter
npm run lint
```

## 📊 Dados Mockados

O projeto utiliza dados mockados armazenados em `src/mocks/professionals.ts`. Atualmente existem **12 profissionais** em diferentes categorias:

- Fotógrafo
- Marceneiro
- Encanador
- Designer de Interiores
- Eletricista
- Limpeza Profissional
- Pintor
- Paisagista
- Pedreiro
- Montador de Móveis
- Técnico de Ar Condicionado
- Vidraceiro

Cada profissional possui:
- Informações pessoais (nome, profissão, bio, localização)
- Avaliação média e número total de avaliações
- Preço médio
- Dias disponíveis para trabalho
- Lista de avaliações com comentários e notas

## 🎨 Design e Identidade Visual

O projeto segue uma identidade visual minimalista e moderna:

- **Paleta de Cores**: Tons de cinza com acentos sutis
- **Tipografia**: Fonte Inter com hierarquia clara
- **Estilo**: Títulos e botões em maiúsculas com fonte reduzida
- **Responsividade**: Layout adaptável para diferentes tamanhos de tela
- **Imagens**: Fotos de serviços do Unsplash

## 🔑 Principais Componentes

### ProfessionalCard
Card exibido na listagem principal com informações resumidas do profissional.

### CategoryFilter
Sistema de filtros por categoria com scroll horizontal e setas de navegação.

### DatePicker
Seletor inteligente de datas que mostra apenas os dias disponíveis do profissional.

### Rating
Componente de avaliação com sistema de estrelas (1-5).

## 📝 Estrutura de Tipos

O projeto utiliza TypeScript com tipos bem definidos em `src/types/index.ts`:

- `Professional` - Estrutura completa do profissional
- `Review` - Estrutura de avaliações
- `DayOfWeek` - Dias da semana disponíveis
- `ServiceRequest` - Solicitação de serviço

## 🔮 Próximas Funcionalidades

O projeto está preparado para expansão futura:

- [ ] Autenticação de usuários
- [ ] Backend real com banco de dados
- [ ] Sistema de pagamento
- [ ] Chat entre cliente e profissional
- [ ] Agendamento real de serviços
- [ ] Notificações
- [ ] Perfil de profissional editável
- [ ] Sistema de favoritos

## 📄 Licença

Este projeto foi desenvolvido como estudo e demonstração de técnicas modernas de desenvolvimento web.

## 👨‍💻 Desenvolvimento

Projeto desenvolvido com foco em:
- Código limpo e organizado
- Componentes reutilizáveis
- TypeScript para type safety
- Design responsivo e moderno
- Boas práticas de desenvolvimento React/Next.js

---

**HireUP** - Conectando profissionais e clientes 🎯
