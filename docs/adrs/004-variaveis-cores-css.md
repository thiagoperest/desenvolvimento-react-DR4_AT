# 004: Implementação de Variáveis de Cores CSS

## Status

- Aceito

## Contexto

O projeto atualmente utiliza cores hardcoded em diversos arquivos CSS espalhados pelos componentes. Isso gera dificuldades de manutenção, inconsistências visuais e torna complicado aplicar mudanças no design system de forma global. A necessidade de alterar uma cor requer a modificação em múltiplos arquivos, aumentando o risco de erros e inconsistências. Além disso, a ausência de um padrão de cores centralizado dificulta a escalabilidade do design e a manutenção da identidade visual da aplicação.

## Decisão

Irei implementar um sistema de variáveis de cores CSS centralizadas no arquivo `index.css` utilizando custom properties do CSS (`:root`). Irei definir uma paleta de cores completa incluindo cores primárias, secundárias, neutras, de estado (sucesso, erro, aviso) e variantes de opacidade. Todas as cores hardcoded nos componentes serão substituídas pelas respectivas variáveis CSS, garantindo consistência e facilidade de manutenção.

## Consequências

Como resultado, teremos um sistema de cores centralizado que facilita a manutenção e garante consistência visual em toda a aplicação. A mudança de qualquer cor do design system poderá ser feita em um único local. As variáveis CSS também permitem suporte nativo a temas (dark/light mode) e são automaticamente herdadas pelos componentes. No entanto, essa abordagem requer um trabalho inicial de migração de todos os arquivos CSS existentes e pode aumentar ligeiramente o tamanho do arquivo CSS principal.
