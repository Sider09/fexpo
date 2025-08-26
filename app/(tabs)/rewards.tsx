import { View, Text } from "react-native";

export default function Rewards() {
  return (
    <View className="flex-1 bg-neutral-100 p-4">
      <View className="bg-white rounded-2xl p-5 shadow">
        <Text className="text-xl font-semibold">Recompensas</Text>
        <Text className="text-neutral-600 mt-1">
          Reclamá tus premios por misiones completadas.
        </Text>
      </View>
    </View>
  );
}
