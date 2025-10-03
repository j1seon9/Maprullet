body {
  font-family: 'Montserrat', sans-serif;
  background-color: #0f1923;
  color: #ffffff;
}

.map-container {
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease;
}

.map-image {
  transition: transform 0.5s ease;
}

.map-container:hover .map-image {
  transform: scale(1.05);
}

.valorant-button {
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.valorant-button:before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: rgba(255, 70, 85, 0.2);
  transition: all 0.3s ease;
}

.valorant-button:hover:before {
  left: 0;
}

.map-switch {
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
}

.map-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.map-slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #2b3a47;
  transition: .4s;
  border-radius: 24px;
}

.map-slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .map-slider {
  background-color: #ff4655;
}

input:checked + .map-slider:before {
  transform: translateX(24px);
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(255, 70, 85, 0.7); }
  70% { box-shadow: 0 0 0 10px rgba(255, 70, 85, 0); }
  100% { box-shadow: 0 0 0 0 rgba(255, 70, 85, 0); }
}

.pulse {
  animation: pulse 1.5s infinite;
}

.map-reveal {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}

input[type=range] {
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: #2b3a47;
  outline: none;
}
