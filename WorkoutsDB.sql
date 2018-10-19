CREATE DATABASE workouts;
CREATE TABLE allWorkouts {
	name TEXT;
	length INTEGER;
	musclesWorked TEXT;
}
INSERT INTO allWorkouts(name, length, musclesWorked) VALUES ('Bench Press', 5, 'Pectoralis, Triceps');