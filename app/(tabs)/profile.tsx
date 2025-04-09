import { Link } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Tab() {
  return (
    <View style={styles.container}>
        <Text className="text-2xl font-bold text-primary-600 mb-4">Profile</Text>
        <Text className="text-typography-500 mb-6">Please log in to view and manage your profile</Text>
        
        <Link href="/auth" asChild>
          <TouchableOpacity className="bg-primary-500 py-4 px-8 rounded-lg">
            <Text className="text-typography-950 font-semibold">Sign In</Text>
          </TouchableOpacity>
        </Link>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
