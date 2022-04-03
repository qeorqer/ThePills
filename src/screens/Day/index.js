import React, { useEffect, useRef, useState } from "react";
import { View, TextInput, KeyboardAvoidingView } from "react-native";
import moment from 'moment';
import { connect } from "react-redux";
import DateTimePicker from "@react-native-community/datetimepicker";

import CustomText from "@components/CustomText";
import HeaderButton from "@components/HeaderButton";
import ReminderRow from "@components/ReminderRow";
import BottomSheet from "@components/BottomSheet";
import CustomButton from "@components/CustomButton";
import { toggleReminderModal } from "@store/reducers/ui";
import { selectIsBottomSheetOpen } from "@store/selectors/ui";
import i18next from "../../../i18next";

import styles from "./styles";

const DayScreen = ({ navigation, toggleModal, isBottomSheetOpen }) => {
  const [note, setNote] = useState("");
  const [time, setTime] = useState(moment().set({ "hour": 8, minute: 0 }));
  const [showTimepicker, setShowTimepicker] = useState(false);

  const { reminders } = navigation.getParam("day");
  const modalRef = useRef(null);

  const closeModal = () => {
    toggleModal(!isBottomSheetOpen);
    modalRef.current?.close();
  };

  const onChange = (event, selectedDate) => {
    if (selectedDate) {
      setTime(moment(selectedDate));
    }
    setShowTimepicker(false);
  };

  const handleCancel = () => {
    closeModal();
    setNote("");
    setTime(moment().set({ "hour": 8, minute: 0 }));
  };

  const handleSave = () => {
    closeModal();
    setNote("");
    setTime(moment().set({ "hour": 8, minute: 0 }));
  }

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
        <BottomSheet bottomSheetRef={modalRef} modalHeight={200} title='add reminder' onClose={closeModal}>
          <View style={styles.formContainer}>
            <View>
              <CustomText text='note' />
              <TextInput
                onChangeText={setNote}
                value={note}
                placeholder={i18next.t("enter your note")}
                style={styles.input}
                textAlignVertical='top'
                multiline
                numberOfLines={4}
              />
            </View>
            <View style={styles.selectTimeContainer}>
              <CustomText
                text='selected time'
                variables={{ time: time.format('hh:mm A') }}
                textStyle={styles.text}
              />
              <CustomButton
                title='change time'
                onPress={() => setShowTimepicker(true)}
                buttonStyle={styles.button}
              />
              <View style={styles.buttonsContainer}>
                <CustomButton
                  title='cancel'
                  onPress={handleCancel}
                  buttonStyle={styles.cancelButton}
                />
                <CustomButton
                  title='save'
                  onPress={handleSave}
                  buttonStyle={styles.saveButton}
                />
              </View>

              {showTimepicker && (
                <DateTimePicker
                  value={time.toDate()}
                  mode='time'
                  is24Hour={true}
                  onChange={onChange}
                  display='clock'
                />
              )}
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
      title: i18next.t(`days.${day.name || day}`),
      headerRight: () => <HeaderButton onPress={() => toggleModal()} />,
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
