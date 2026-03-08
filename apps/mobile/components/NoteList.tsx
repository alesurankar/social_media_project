import { View, FlatList } from "react-native";
import NoteItem from "./NoteItem";

type Note = {
  id: string;
  text: string;
};

type NoteListProps = {
  notes: Note[];
};

const NoteList = ({ notes }: NoteListProps) => {
    return ( 
        <View>
            <FlatList 
                data={notes}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <NoteItem note={item}/>}
            />
        </View>
    );
};

export default NoteList;