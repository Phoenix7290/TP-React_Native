import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import PropositionItem from "../../Components/PropositionItem";
import { fetchPropositions } from "../../services";

const PropositionListScreen = () => {
  const [propositions, setPropositions] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const loadPropositions = async () => {
    const data = await fetchPropositions();
    setPropositions(data);
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await loadPropositions();
    setRefreshing(false);
  };

  useEffect(() => {
    loadPropositions();
  }, []);

  return (
    <View style={styles.container}>
      {propositions.length === 0 ? (
        <Text style={styles.message}>Nenhuma proposição encontrada.</Text>
      ) : (
        <FlatList
          data={propositions}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <PropositionItem title={item.titulo} description={item.descricaoTipo} />
          )}
          refreshing={refreshing}
          onRefresh={handleRefresh}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  message: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
});

export default PropositionListScreen;
