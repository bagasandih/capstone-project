# Coffee Plant Disease Detection Using CNN

This project focuses on building a Convolutional Neural Network (CNN) model to detect diseases in coffee plants. The model is trained to identify four categories: `miner`, `rust`, `nodisease`, and `phoma`. Additionally, the trained model is converted to TensorFlow Lite (TFLite) format for deployment on edge devices.

[![Open In Collab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/Naereen/badges)

## Project Overview

1. **Data Collection**: 
   - Images of coffee plant leaves categorized into four classes: `miner`, `rust`, `nodisease`, and `phoma`.
   
2. **Data Preprocessing**:
   - Images are loaded, resized to 224x224 pixels, and normalized.

3. **Model Building**:
   - A CNN model is built using the Keras framework with TensorFlow backend.
   - The base model used is MobileNetV2, pre-trained on ImageNet dataset.
   - Additional layers are added for our specific classification task.

4. **Model Training**:
   - The model is trained on the training dataset and validated using the validation dataset.
   - Various metrics like accuracy and loss are monitored.

5. **Model Conversion**:
   - The trained model is converted to TensorFlow Lite format for deployment on mobile or edge devices.
   - Metadata is added to the TFLite model to facilitate better usability.

## Dataset

The dataset used in this project consists of images of coffee plant leaves categorized into four classes:
- `miner`: Leaves affected by miner disease.
- `rust`: Leaves affected by rust disease.
- `nodisease`: Healthy leaves with no disease.
- `phoma`: Leaves affected by phoma disease.

The dataset is structured into two main directories: `train` and `validation`, each containing subdirectories for each class. The images are collected from various sources to ensure diversity and robustness of the model.

Example directory structure:
```
dataset/
│
├── train/
│ ├── miner/
│ ├── rust/
│ ├── nodisease/
│ └── phoma/
│
└── validation/
  ├── miner/
  ├── rust/
  ├── nodisease/
  └── phoma/
```

## Requirements

- Python 3.x
- TensorFlow 2.12.0
- TensorFlow Lite Support 0.4.3
- OpenCV
- NumPy
- Matplotlib
- Google Colab (for ease of use and GPU support)

## Installation

To install the required packages, run:

```bash
pip install tensorflow==2.12.0
pip install tflite-support==0.4.3
pip install opencv-python
pip install numpy
pip install matplotlib
```
## Authors

- Bagas Andihartono - www.linkedin.com/in/bagas-andihartono-9b00112bb
- Lovenchia Cheren Melinda Warouw - www.linkedin.com/in/lovenchiawarouw/
- Sharon Tabita Sulung - www.linkedin.com/in/sharon-tabita-sulung/


## Conclusion
This project demonstrates the entire workflow of creating a CNN model for coffee plant disease detection, training it, converting it to TFLite format, and adding metadata for better usability. The final TFLite model can be deployed on mobile or edge devices for real-time disease detection.

## References
- TensorFlow
- TensorFlow Lite
- OpenCV
- Keras

