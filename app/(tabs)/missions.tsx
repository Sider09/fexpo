import { View, Text, Pressable } from "react-native";

export default function Missions() {
  return (
    <View className="flex-1 bg-neutral-100 p-4">
      <View className="bg-white rounded-2xl p-5 shadow">
        <Text className="text-xl font-semibold">Misiones</Text>
        <Text className="text-neutral-600 mt-1">
          Escaneá QR o imagen para completar retos.
        </Text>
        <Pressable className="mt-4 bg-green-500 rounded-xl px-4 py-3">
          <Text className="text-white text-center font-medium">Escanear código</Text>
        </Pressable>
      </View>
    </View>
  );
}
