import Dockerode from "dockerode";
const docker=new Dockerode();



docker.listContainers({all: true}, (err, containers) => {
  console.log(containers);
});