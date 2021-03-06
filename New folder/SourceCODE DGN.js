apiVersion: v1
kind: Endpoints
metadata:
  creationTimestamp: "2021-08-14T23:02:29Z"
  labels:
    endpointslice.kubernetes.io/skip-mirror: "true"
  name: kubernetes
  namespace: default
  resourceVersion: "215"
  uid: 3f3e9c8c-bb16-4062-a92e-5d03bf46d54a
subsets:
  - addresses:
      - ip: 192.168.65.4
    ports:
      - name: https
        port: 6443
        protocol: TCP