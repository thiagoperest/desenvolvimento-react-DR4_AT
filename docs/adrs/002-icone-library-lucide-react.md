# 002: Adoção da Lucide React como Biblioteca de Ícones

## Status

- Aceito

## Contexto

O projeto utiliza atualmente ícones textuais (✕ e ←) para representar ações de exclusão e navegação. Essa abordagem apresenta limitações de escalabilidade, consistência visual e acessibilidade. Ícones textuais não oferecem precisão visual, podem renderizar de forma inconsistente entre diferentes navegadores e não seguem padrões modernos de UI/UX. A necessidade de uma biblioteca de ícones profissional se torna evidente para elevar a qualidade visual e manter a consistência em toda a aplicação.

## Decisão

Irei adotar a Lucide React como biblioteca oficial de ícones do projeto. A Lucide React será instalada via npm e utilizada para substituir todos os ícones textuais existentes, começando pelos ícones de exclusão (X) e navegação (ArrowLeft). Todos os novos ícones implementados no projeto deverão utilizar esta biblioteca.

## Consequências

**Positivas:**
- Consistência visual em toda a aplicação com ícones profissionais
- Melhor escalabilidade com ícones SVG que não perdem qualidade
- Acessibilidade aprimorada com suporte nativo para screen readers
- Manutenção simplificada com API consistente e documentação robusta
- Licença MIT permitindo uso comercial sem restrições

**Negativas:**
- Adição de uma dependência externa ao projeto

**Neutras:**
- Necessidade de ajustes CSS para acomodar novos ícones (dimensionamento e alinhamento)
- Atualização dos componentes existentes para importar e utilizar os novos ícones
