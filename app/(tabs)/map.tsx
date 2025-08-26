import { View, Text } from "react-native";

export default function MapTab() {
  return (
    <View className="flex-1 bg-neutral-100 p-4">
      <View className="bg-white rounded-2xl p-5 shadow">
        <Text className="text-xl font-semibold">Mapa</Text>
        <Text className="text-neutral-600 mt-1">
          Escaneá un stand y te diremos a qué pabellón ir.
        </Text>
      </View>
    </View>
  );
}
