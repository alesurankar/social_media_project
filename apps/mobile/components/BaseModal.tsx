import { 
    View, Text, StyleSheet, TouchableOpacity, Modal
} from "react-native";
import { ReactNode } from "react";


type BaseModalProps = {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  title?: string;
  onConfirm?: () => void;
  closeText?: string;
  confirmText?: string;
  children?: ReactNode;
};

const BaseModal = ({
    modalVisible,
    setModalVisible,
    title = "Default Modal",
    onConfirm,
    closeText = "Close",
    confirmText = "Confirm",
    children,
}: BaseModalProps) => {

    return ( 
        <Modal
            visible={modalVisible}
            animationType='slide'
            transparent
            onRequestClose={() => setModalVisible(false)}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    
                    <Text style={styles.modalTitle}>{title}</Text>

                    {/* dynamic content */}
                    {children}

                    <View style={styles.modalButtons}>
                        <TouchableOpacity 
                            style={styles.closeButton} 
                            onPress={ () => setModalVisible(false) }
                        ><Text style={styles.closeButtonText}>{closeText}</Text>
                        </TouchableOpacity>

                        {onConfirm && (
                            <TouchableOpacity 
                                style={styles.confirmButton}
                                onPress={onConfirm}
                            ><Text style={styles.confirmButtonText}>{confirmText}</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 10,
        width: '80%',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        fontSize: 16,
        marginBottom: 15,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    closeButton: {
        backgroundColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        flex:1, 
        marginRight: 10,
        alignItems: 'center',
    },
    closeButtonText: {
        fontSize: 16,
        color: '#333',
    },
    confirmButton: {
        backgroundColor: '#4d5c75',
        padding: 10,
        borderRadius: 5,
        flex: 1,
        alignItems: 'center',
    },
    confirmButtonText: {
        fontSize: 16,
        color: '#ffffff'
    },
});

export default BaseModal;