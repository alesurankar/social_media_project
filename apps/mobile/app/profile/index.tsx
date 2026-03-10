import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from 'react';
import LoginModal from '../../components/auth/LoginModal';


const Profile = () => {
    const [modalVisible, setModalVisible] = useState(false);


    return (
        <View style={styles.container}>
            <Text>This is Profile Page</Text>

            <TouchableOpacity 
                style={styles.addButton} 
                onPress={ () => setModalVisible(true) }
            ><Text style={styles.addButtonText}>Open Modal</Text>
            </TouchableOpacity>

            {/* Modal */}
            <LoginModal 
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />
        </View> 
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ffffff',
    },
    addButton: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right:20,
        backgroundColor: '#4d5c75',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    addButtonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Profile;