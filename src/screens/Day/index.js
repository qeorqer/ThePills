import React, { useEffect, useRef, useState } from "react";
import { View, TextInput, KeyboardAvoidingView } from "react-native";
import { connect } from "react-redux";
import { t } from "i18next";

import CustomText from "@components/CustomText";
import HeaderButton from "@components/HeaderButton";
import ReminderRow from "@components/ReminderRow";
import BottomSheet from "@components/BottomSheet";
import { toggleReminderModal } from "@store/reducers/ui";
import { selectIsBottomSheetOpen } from "@store/selectors/ui";

import styles from "./styles";

const DayScreen = ({ navigation, toggleModal, isBottomSheetOpen }) => {
  const [note, setNote] = useState("");
  const { reminders } = navigation.getParam("day");
  const modalRef = useRef(null);

  const onOpen = () => {
    modalRef.current?.open();
  };

  const onClose = () => {
    toggleModal(!isBottomSheetOpen);
    modalRef.current?.close();
  };

  useEffect(() => {
    if (isBottomSheetOpen) {
      modalRef.current?.open();
    }
  }, [isBottomSheetOpen]);

  useEffect(() => {
    navigation.setParams({ toggleModal });
  }, [toggleModal]);

  return (
    <View style={styles.container}>
      {
        reminders.length ? (
          <>
            <CustomText text='your reminders' textStyle={styles.emptyStateText} />
            {reminders.map((reminder) => <ReminderRow reminder={reminder} key={reminder.id} />)}
          </>
        ) : (
          <CustomText text='no reminders state' textStyle={styles.emptyStateText} />
        )
      }
      <KeyboardAvoidingView>
        <BottomSheet bottomSheetRef={modalRef} modalHeight={200} title='add reminder' onClose={onClose}>
          <View style={styles.formContainer}>
            <View>
              <CustomText text='note' />
              <TextInput
                onChangeText={setNote}
                value={note}
                //TODO find out
                //placeholder={t("enter your note")}
                style={styles.input}
                multiline
                numberOfLines={4}
              />
            </View>
            <View>
              <CustomText text='selected time' variables={{ time: new Date().getTime() }} />
            </View>
          </View>
        </BottomSheet>
      </KeyboardAvoidingView>
    </View>
  );
};

DayScreen.navigationOptions = ({ navigation }) => {
  const toggleModal = navigation.getParam("toggleModal");

  const day = navigation.getParam("day", "Day");

  return (
    {
      title: t(`days.${day.name || day}`),
      headerRight: () => <HeaderButton handlePress={() => toggleModal()} />,
    }
  );
};

const mapStateToProps = (state) => ({
  isBottomSheetOpen: selectIsBottomSheetOpen(state),
});

const mapDispatchToProps = {
  toggleModal: toggleReminderModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(DayScreen);
