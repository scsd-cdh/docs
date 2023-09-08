---
title: Services 
description: What are the services available in AstroCore?
sidebar_position: 2
---

# Services 

## Introduction

Services are the highest level of abstraction in AstroCore applications. They are tasks which are executed at a certain frequency and are expected to accomplish one specific functionality. These tasks will periodically check for events, as well as periodically execute some functionality. These services should have CLI utilities to interact with them.

## Service Management

Similar to the systemd utility for Linux operating systems, there should be a CLI utility that we can use to get a list of all running services, what their state is (running, suspended, disabled) as well as to be able to see some logs.

## Core Services

Services will be made available from the AstroCore crate. They will be part of the `AstroCore.Services` package. If the mission application requires something other than the generic implementation, it will need to create its own Custom Service.

### Health Management

This service handles AstroCore service health checks and logging them. More specifically, it will execute periodically and inspect all other running services. If an error is detected, it will examine the severity of the error, and handle it accordingly. As an example, are are some examples of how these errors could be handled:
- **FATAL**: The Health Management service will **disable** the service, and log the error. This severity should be used for errors that can threaten the rest of the mission. Since AstroCore will disable the service, this severity should be used with very good justifications.
- **ERROR**: The Health Management service will **restart** the service, and log the error. This severity should be used for errors that the service can not recover from on its own.
- **WARN**: The Health Management service will clear the error, and log it. This severity should be used for errors that do not prevent the service from continuing its operations, but should still be logged. 
- **DEBUG**: The Health Management service will clear the message, and log it. This severity should be used for debug messages. These messages shall only be logged while the `ASTROCORE_DEBUG` flag is set to False. 

### File Manager

This service handles access to the file system. Whenever a file is created or opened, it will return a `AstroCore.Services.Filesystem.File` object. It should most likely implement the following commands: 

**Commands:**

- **fss_open_file**
  - Description: Attempts to open a file at the given path.
  - Parameters:
    - `path` (String): File path.
  - Return Codes: May return appropriate status codes indicating success or failure.

- **fss_create_file**
- **fss_delete_file**
- **fss_file_exists**
- **fss_get_cwd**
- **fss_set_cwd**

### Data Storage

This service handles storing data that should be made accessible to all services (globals). It should most likely implement the following commands:

**Commands:**

- **dss_store_data**
  - Description: Stores data at the specified key position.
  - Parameters:
    - `key` (String): Key position.
    - `data` (?): Data to be stored.
  - Return Codes: May return appropriate status codes indicating success or failure.

- **dss_fetch_data**
  - Description: Retrieves data stored at a given key.
  - Parameters:
    - `key` (String): Key position for data retrieval.
  - Return Codes: May return appropriate status codes indicating success or failure.

- **dss_delete_data**
  - Description: Deletes data stored at a given key.
  - Parameters:
    - `key` (String): Key position for data deletion.
  - Return Codes: May return appropriate status codes indicating success or failure.

- **dss_data_exists**
  - Description: Verifies data existence at a specific key.
  - Parameters:
    - `key` (String): Key position for data existence verification.
  - Return Codes: May return appropriate status codes indicating success or failure.

### Telemetry

### Watchdog

### Communications

### Scheduler

## Mission Services 

### Imaging

### Inference

### Laboratory

### ADCS

### Thermal