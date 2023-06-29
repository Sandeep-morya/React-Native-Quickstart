import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { styled } from "nativewind";

const Heading = styled(Text, "font-bold text-xl capitalize");
const Container = styled(View, "");

export default function App() {
	return (
		<Container>
			<Text className="text-amber-600">hi</Text>
			<Heading>hello</Heading>
			<StatusBar style="auto" />
		</Container>
	);
}
