import { View } from "react-native";
import { Portal } from "@gorhom/portal";
import { Modalize } from "react-native-modalize";

import CloseButton from "@components/CloseButton";
import CustomText from "@components/CustomText";

import styles from "./styles";

const BottomSheet = ({ modalHeight, bottomSheetRef, title, children, onClose }) => {
  return (
    <Portal>
      <Modalize
        ref={bottomSheetRef}
        closeOnOverlayTap
        onOverlayPress={onClose}
        keyboardAvoidingBehavior="height"
        adjustToContentHeight
      >
        <View style={[styles.container, { height: modalHeight }]}>
          <View style={styles.header}>
            <CustomText text={title} textStyle={styles.title} />
            <CloseButton handlePress={onClose} />
          </View>
          {children}
        </View>
      </Modalize>
    </Portal>
  );
};

export default BottomSheet;
