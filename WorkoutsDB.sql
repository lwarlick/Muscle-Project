CREATE TABLE allWorkouts (
	Name text,
	Length int,
	MusclesWorked text
);
INSERT INTO allWorkouts(Name, Length, MusclesWorked) VALUES ('Bench Press',5,'Pectoralis');
SELECT * FROM allWorkouts;
