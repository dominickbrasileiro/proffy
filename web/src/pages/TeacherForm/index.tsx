/* eslint-disable no-unused-vars */
import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import api from '../../services/api';

import './styles.css';

function TeacherForm() {
  const history = useHistory();

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: '', from: '', to: '' },
  ]);

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      { week_day: '', from: '', to: '' },
    ]);
  }

  function setScheduleItemValue(position: number, field: string, value: string) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    });

    setScheduleItems(updatedScheduleItems);
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    api.post('classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost) * 100,
      schedule: scheduleItems,
    }).then(() => {
      alert('Registration successful!');

      history.push('/');
    }).catch(() => {
      alert('Registration error.');
    });
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Amazing that you want to teach!"
        description="The first step is to fill out this application form."
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Your data</legend>
            <Input
              name="name"
              label="Full name"
              value={name}
              onChange={(e) => { setName(e.target.value); }}
            />

            <Input
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={(e) => { setAvatar(e.target.value); }}
            />

            <Input
              name="whatsapp"
              label="WhatsApp"
              value={whatsapp}
              onChange={(e) => { setWhatsapp(e.target.value); }}
            />

            <Textarea
              name="bio"
              label="Biography"
              value={bio}
              onChange={(e) => { setBio(e.target.value); }}
            />
          </fieldset>

          <fieldset>
            <legend>About the class</legend>
            <Select
              name="subject"
              label="Subject"
              options={[
                { value: 'Art', label: 'Art' },
                { value: 'Biology', label: 'Biology' },
                { value: 'Chemistry', label: 'Chemistry' },
                { value: 'English', label: 'English' },
                { value: 'Geography', label: 'Geography' },
                { value: 'History', label: 'History' },
                { value: 'Mathematics', label: 'Mathematics' },
                { value: 'Physical Education', label: 'Physical Education' },
                { value: 'Physics', label: 'Physics' },
                { value: 'Science', label: 'Science' },
              ]}
              value={subject}
              onChange={(e) => { setSubject(e.target.value); }}
            />

            <Input
              name="cost"
              label="Cost of your hour per class"
              value={cost}
              onChange={(e) => { setCost(e.target.value); }}
            />
          </fieldset>

          <fieldset>
            <legend>
              Your available times
              <button type="button" onClick={addNewScheduleItem}>
                + New time
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => (
              <div key={scheduleItem.week_day} className="schedule-item">
                <Select
                  name="week_day"
                  label="Day of the week"
                  value={scheduleItem.week_day}
                  onChange={((e) => setScheduleItemValue(index, 'week_day', e.target.value))}
                  options={[
                    { value: '0', label: 'Sunday' },
                    { value: '1', label: 'Monday' },
                    { value: '2', label: 'Tuesday' },
                    { value: '3', label: 'Wednesday' },
                    { value: '4', label: 'Thursday' },
                    { value: '5', label: 'Friday' },
                    { value: '6', label: 'Saturday' },
                  ]}
                />
                <Input
                  name="from"
                  label="From"
                  value={scheduleItem.from}
                  onChange={((e) => setScheduleItemValue(index, 'from', e.target.value))}
                  type="time"
                />
                <Input
                  name="to"
                  label="To"
                  value={scheduleItem.to}
                  onChange={((e) => setScheduleItemValue(index, 'to', e.target.value))}
                  type="time"
                />
              </div>
            ))}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Important warning!" />
              Important!
              {' '}
              <br />
              Fill in all the details
            </p>

            <button type="submit">
              Register
            </button>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default TeacherForm;
