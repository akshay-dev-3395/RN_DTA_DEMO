const useAttendanceHook = () => {
    const attendanceData = [
        { date: '26', day: 'Wed', status: 'present', checkinTime: '08:59', checkoutTime: '6:00' },
        { date: '27', day: 'Wed', status: 'secondHalf', checkinTime: '09:00', checkoutTime: '01:10' },
        { date: '28', day: 'Wed', status: 'firstHalf', checkinTime: '01:00', checkoutTime: '06:10' },
        { date: '29', day: 'Wed', status: 'casual', checkinTime: '', checkoutTime: ''},
        { date: '30', day: 'Wed', status: 'present', checkinTime: '09:05', checkoutTime: '06:00' },
      ];
      return {
        attendanceData
      };
}
export default useAttendanceHook