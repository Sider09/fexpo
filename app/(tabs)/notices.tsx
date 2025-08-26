import { View, Text } from "react-native";

export default function Notices() {
  return (
    <View className="flex-1 bg-neutral-100 p-4">
      <View className="bg-white rounded-2xl p-5 shadow">
        <Text className="text-xl font-semibold">Avisos</Text>
        <Text className="text-neutral-600 mt-1">
          Te avisaremos antes de que inicien shows y conferencias.
        </Text>
      </View>
    </View>
  );
}
