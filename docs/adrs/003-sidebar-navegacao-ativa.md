# 003: Implementação de Sidebar para Navegação Ativa com Feedback Visual

## Status

- Aceito

## Contexto

A Tarefa 9 requer implementação de navegação ativa com feedback visual para indicar qual página o usuário está visitando. A abordagem inicial de usar NavLink nos componentes individuais não proporcionava feedback visual claro e suficiente. A necessidade de uma solução mais robusta e profissional se torna evidente para garantir uma experiência de usuário adequada.

## Decisão

Irei implementar um layout de Sidebar + Conteúdo, para substituir a navegação baseada em links individuais. A sidebar será fixa à esquerda, contendo toda a navegação da aplicação com feedback visual claro para a página ativa por estilos CSS específicos na classe .active dos NavLink. Esta abordagem irar centralizar a navegação e proporcionar um feedback visual imediato e persistente.

## Consequências

**Positivas:**
- Feedback visual claro e persistente da página ativa por destaque na sidebar
- Navegação centralizada facilitando manutenção e escalabilidade
- Layout responsivo que se adapta a diferentes tamanhos de tela
- Reutilização de componentes com arquitetura limpa (Layout, Sidebar)
- Eliminação de redundância de navegação nos componentes individuais
- Melhor organização visual do espaço da aplicação

**Negativas:**
- Redução do espaço útil para conteúdo principal devido à sidebar fixa
- Complexidade inicial maior na estrutura de componentes
- Necessidade de ajustes CSS para compatibilidade responsiva
- Reestruturação dos componentes existentes para remover navegação individual

**Neutras:**
- Criação de novos componentes (Sidebar, Layout) aumentando a base de código
- Necessidade de gerenciar estado de abertura/fechamento da sidebar em dispositivos móveis
- Adaptação do fluxo de desenvolvimento para considerar o layout fixo
