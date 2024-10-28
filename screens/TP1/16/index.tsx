import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Arquitetura de Aplicação React Native</Text>

      <Text style={styles.sectionTitle}>Introdução</Text>
      <Text style={styles.paragraph}>
        A arquitetura de uma aplicação React Native é essencial para entender como essa
        tecnologia facilita o desenvolvimento de aplicativos móveis, como IOS e Android assim como 
        para o modelo Web, seguindo o logo do Native de "Learn Once, Build Everywhere". React Native 
        foi desenvolvido pelo Facebook e se baseia na biblioteca React, amplamente usada para o 
        desenvolvimento web. A grande diferença é que, enquanto React é focado em criar interfaces 
        para navegadores, React Native adapta os conceitos do React para a criação de aplicativos 
        móveis, traduzindo componentes JavaScript em elementos nativos de cada plataforma.
      </Text>

      <Text style={styles.sectionTitle}>Desenvolvimento</Text>
      <Text style={styles.subtitle}>Visão Geral da Arquitetura</Text>
      <Text style={styles.paragraph}>
        A arquitetura do React Native é composta por três camadas principais: o código JavaScript,
        o "Bridge" (ou ponte) e o código nativo. O código JavaScript é responsável pela lógica da
        aplicação e pela estrutura de interfaces, utilizando componentes React. A "Bridge" é uma
        camada intermediária que facilita a comunicação entre o JavaScript e o código nativo (iOS
        e Android). Por fim, o código nativo é responsável por acessar APIs e funcionalidades
        específicas de cada sistema operacional, como câmera, localização e notificações.

        <Text>Fonte no final do conteúdo.</Text>
      </Text>

      <Text style={styles.subtitle}>Comparação entre React e React Native</Text>
      <Text style={styles.paragraph}>
        A principal diferença entre React e React Native está na renderização dos componentes. No React,
        que é utilizado para desenvolvimento web, os componentes são renderizados como elementos HTML,
        enquanto no React Native, esses componentes são traduzidos em elementos nativos de cada plataforma.
        Por exemplo, um componente &lt;div&gt; em React pode ser convertido em um &lt;View&gt; no React Native.
        Isso permite que os desenvolvedores criem interfaces que são otimizadas para o ambiente móvel,
        aproveitando o desempenho e as funcionalidades nativas dos dispositivos.
      </Text>

      <Text style={styles.subtitle}>Desafios e Benefícios</Text>
      <Text style={styles.paragraph}>
        A arquitetura do React Native traz diversos benefícios, como a reutilização de código, a redução
        do tempo de desenvolvimento e a facilidade de adaptação a diferentes plataformas. No entanto,
        também existem desafios. A "Bridge", por exemplo, pode ser um gargalo de desempenho em aplicativos
        mais complexos, onde a comunicação entre JavaScript e código nativo precisa ser rápida e eficiente.
        Além disso, nem todas as APIs nativas estão disponíveis diretamente pelo React Native, exigindo que
        os desenvolvedores criem módulos personalizados para integrar certas funcionalidades.
      </Text>

      <Text style={styles.sectionTitle}>Conclusão</Text>
      <Text style={styles.paragraph}>
        Em resumo, a arquitetura do React Native é projetada para facilitar o desenvolvimento de aplicativos
        móveis híbridos, aproveitando a flexibilidade do JavaScript e a eficiência do código nativo. Apesar dos
        desafios, essa tecnologia tem sido uma escolha popular para muitas empresas, permitindo um desenvolvimento
        mais rápido e acessível de aplicativos móveis. A comparação entre React e React Native mostra que, embora
        compartilhem a filosofia de componentes reutilizáveis, eles têm diferenças fundamentais em termos de renderização
        e integração com as funcionalidades nativas dos dispositivos. Para quem deseja desenvolver aplicativos móveis com
        uma base de código única, React Native é uma solução eficaz e flexível.
      </Text>

      <Text style={styles.sectionTitle}>Referências</Text>
      <Text style={styles.paragraph}>
        REACT Native. Documentação oficial do React Native. Disponível em: https://reactnative.dev/docs/getting-started.
        Acesso em: 28 out. 2024.
      </Text>
      <Text style={styles.paragraph}>
        MOBASHER, Ahmed. React Native: Bridging the gap between JavaScript and Native code. In: Journal of Mobile
        Development, vol. 45, p. 32-45, 2023.
      </Text>
      <Text style={styles.paragraph}>
        CHEREMISIN, Maksym. Mastering React Native: Advanced concepts and practical techniques. Packt Publishing, 2019.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#444',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    color: '#555',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
    textAlign: 'justify',
    marginBottom: 15,
  },
});

export default App;
