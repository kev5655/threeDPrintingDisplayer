# threeDPrintingDisplayer

## Info
Find the Kafka Cluster Name
`http://localhost:8083/`
for this run the kafka-connect Container

Find all Plugins on Kafka Connector
`curl -sS localhost:8083/connector-plugins`

## Connect Kafka and Mqtt Mosquitto Broker
https://docs.confluent.io/kafka-connectors/mqtt/current/mqtt-source-connector/mqtt_source_connector_quickstart.html#install-the-mqtt-connector-plugin
https://www.baeldung.com/kafka-connect-mqtt-mongodb

Go to into the kafka/connect container
`docker exec -it kafka-connect bash`

Install Mqtt Connector
`confluent-hub install confluentinc/kafka-connect-mqtt:latest`

Restart the Docker Container

`curl -d @<path-to-config-file>/connect-mqtt-source.json -H "Content-Type: application/json" -X POST http://localhost:8083/connectors`

`curl -d @./config/connect-mqtt-source.json -H "Content-Type: application/json" -X POST http://localhost:8083/connectors`
